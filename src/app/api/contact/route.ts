// Forwards contact-form submissions to SharpSpring as a new/updated lead.
// SharpSpring's secret key must stay server-side, so this route exists purely
// so the client never talks to SharpSpring directly (see src/app/contact/page.tsx).
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json(
      { success: false, error: "We couldn't read your submission. Please refresh the page and try again." },
      { status: 400 }
    );
  }
  const { name, email, company, phone, size, interest, investment, timeline, message, formId } = body;

  // Name and email are the only fields this route truly requires - name a
  // missing field explicitly rather than a generic "invalid form" message,
  // so a visitor can fix it and resubmit without guessing.
  const missing: string[] = [];
  if (!name || !String(name).trim()) missing.push("your name");
  if (!email || !String(email).trim()) missing.push("your email address");
  if (missing.length > 0) {
    return Response.json(
      { success: false, error: `Please enter ${missing.join(" and ")} to continue.` },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return Response.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const accountID = process.env.SHARPSPRING_ACCOUNT_ID;
  const secretKey = process.env.SHARPSPRING_SECRET_KEY;

  // Each source form declares its own formId (see src/app/contact/page.tsx,
  // src/components/AuditModal.tsx, src/components/GrowthReviewModal.tsx,
  // src/components/WebsiteInquiryModal.tsx). Only one SharpSpring list exists
  // today, so every form falls back to it; a form-specific env var (once
  // provided) takes over automatically without any other code changes.
  const FORM_LABELS: Record<string, string> = {
    general_inquiry: "General Inquiry",
    ai_visibility_audit: "AI Visibility Audit",
    gtm_growth_review: "GTM Growth Review",
    website_inquiry: "Website Inquiry",
  };
  const formLabel = FORM_LABELS[formId as string] || "Website Form";

  const LIST_ID_BY_FORM: Record<string, string | undefined> = {
    general_inquiry: process.env.SHARPSPRING_CONTACT_FORM_LIST_ID,
    ai_visibility_audit: process.env.SHARPSPRING_AI_VISIBILITY_LIST_ID,
    gtm_growth_review: process.env.SHARPSPRING_GTM_GROWTH_REVIEW_LIST_ID,
    website_inquiry: process.env.SHARPSPRING_WEBSITE_INQUIRY_LIST_ID,
  };
  const listID = LIST_ID_BY_FORM[formId as string] || process.env.SHARPSPRING_CONTACT_FORM_LIST_ID;

  if (!accountID || !secretKey) {
    console.error("[api/contact] SHARPSPRING_ACCOUNT_ID / SHARPSPRING_SECRET_KEY missing from process.env at request time");
    return Response.json(
      { success: false, error: "We're unable to submit your request right now. Please email us directly at contact@brandiron.net and we'll follow up personally." },
      { status: 500 }
    );
  }

  const [firstName, ...rest] = String(name).trim().split(/\s+/);
  const lastName = rest.join(" ") || firstName;

  // Company size, interest, investment range, and timeline aren't standard
  // SharpSpring lead fields - until real custom-field system names are
  // supplied from the account (Setup > Edit Fields), fold them into the
  // description field so nothing gets silently dropped.
  const description = [
    `Source Form: ${formLabel}`,
    company && `Company: ${company}`,
    size && `Company Size: ${size}`,
    interest && `Interested In: ${interest}`,
    investment && `Investment Range: ${investment}`,
    timeline && `Timeline: ${timeline}`,
    message && `Message: ${message}`,
  ].filter(Boolean).join("\n");

  const leadFields = {
    firstName,
    lastName,
    companyName: company || "",
    phoneNumber: phone || "",
    description,
  };

  async function callSharpSpring(method: string, params: Record<string, unknown>) {
    const res = await fetch(
      `https://api.sharpspring.com/pubapi/v1/?accountID=${encodeURIComponent(accountID!)}&secretKey=${encodeURIComponent(secretKey!)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ method, params, id: `contact-${method}-${Date.now()}` }),
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    }
    return res.json();
  }

  // Adds the lead to the "Brand Iron Contact Form" SharpSpring list (via its
  // ID, set as SHARPSPRING_CONTACT_FORM_LIST_ID). Best-effort: list placement
  // should never block or fail the visitor's form submission.
  async function addToContactList() {
    if (!listID) return;
    try {
      await callSharpSpring("addListMemberEmailAddress", { objects: [{ emailAddress: email, listID }] });
    } catch (err) {
      console.error("[api/contact] Could not add lead to SharpSpring list:", err instanceof Error ? err.message : err);
    }
  }

  try {
    const data = await callSharpSpring("createLeads", {
      objects: [{ emailAddress: email, ...leadFields }],
    });

    const createResult = data?.result?.creates?.[0];
    // SharpSpring returns "error": [] (an empty, truthy array) on success, so
    // only a non-empty error array/object counts as a real RPC-level error.
    const rpcError = Array.isArray(data?.error) ? data.error.length > 0 : Boolean(data?.error);
    const failed = rpcError || createResult?.success !== true || Boolean(createResult?.error);

    if (failed) {
      const errCode = createResult?.error?.code ?? (Array.isArray(data?.error) ? data.error[0]?.code : undefined);

      // Code 301 "Entry already exists" means this email is already a lead
      // in SharpSpring - a visitor is free to submit any number of forms
      // (audit, growth review, general inquiry, ...) with the same address,
      // so this must never block or overwrite prior history. Append the new
      // submission to the existing record's description instead of
      // replacing it, and treat it as success either way.
      if (errCode === 301) {
        try {
          const lookup = await callSharpSpring("getLeads", { where: { emailAddress: email }, limit: 1, offset: 0 });
          const existingLead = lookup?.result?.lead?.[0];
          const existingId = existingLead?.id;
          if (existingId) {
            const timestamp = new Date().toISOString();
            const mergedDescription = [
              existingLead?.description,
              `--- New submission (${timestamp}) ---`,
              description,
            ].filter(Boolean).join("\n\n");
            await callSharpSpring("updateLeads", { objects: [{ id: existingId, ...leadFields, description: mergedDescription }] });
          } else {
            console.error("[api/contact] Duplicate lead (301) but lookup found no id:", JSON.stringify(lookup));
          }
        } catch (updateErr) {
          console.error("[api/contact] Duplicate lead (301); follow-up update failed:", updateErr instanceof Error ? updateErr.message : updateErr);
        }
        await addToContactList();
        return Response.json({ success: true });
      }

      console.error("[api/contact] SharpSpring rejected the lead:", JSON.stringify(data));
      return Response.json(
        { success: false, error: "We're having trouble submitting your request right now. Please try again in a moment, or email us directly at contact@brandiron.net." },
        { status: 502 }
      );
    }

    await addToContactList();
    return Response.json({ success: true });
  } catch (err) {
    console.error("[api/contact] Could not reach SharpSpring:", err instanceof Error ? err.message : err);
    return Response.json(
      { success: false, error: "We're having trouble submitting your request right now. Please try again in a moment, or email us directly at contact@brandiron.net." },
      { status: 502 }
    );
  }
}
