// Forwards contact-form submissions to SharpSpring as a new/updated lead.
// SharpSpring's secret key must stay server-side, so this route exists purely
// so the client never talks to SharpSpring directly (see src/app/contact/page.tsx).
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, phone, size, interest, investment, timeline, message } = body ?? {};

  if (!name || !email) {
    return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  const accountID = process.env.SHARPSPRING_ACCOUNT_ID;
  const secretKey = process.env.SHARPSPRING_SECRET_KEY;

  if (!accountID || !secretKey) {
    console.error("[api/contact] SHARPSPRING_ACCOUNT_ID / SHARPSPRING_SECRET_KEY missing from process.env at request time");
    return Response.json({ success: false, error: "SharpSpring is not configured" }, { status: 500 });
  }

  const [firstName, ...rest] = String(name).trim().split(/\s+/);
  const lastName = rest.join(" ") || firstName;

  // Company size, interest, investment range, and timeline aren't standard
  // SharpSpring lead fields - until real custom-field system names are
  // supplied from the account (Setup > Edit Fields), fold them into the
  // description field so nothing gets silently dropped.
  const description = [
    company && `Company: ${company}`,
    size && `Company Size: ${size}`,
    interest && `Interested In: ${interest}`,
    investment && `Investment Range: ${investment}`,
    timeline && `Timeline: ${timeline}`,
    message && `Message: ${message}`,
  ].filter(Boolean).join("\n");

  try {
    const sharpSpringRes = await fetch(
      `https://api.sharpspring.com/pubapi/v1/?accountID=${encodeURIComponent(accountID)}&secretKey=${encodeURIComponent(secretKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          method: "createLeads",
          params: {
            objects: [
              {
                emailAddress: email,
                firstName,
                lastName,
                companyName: company || "",
                phoneNumber: phone || "",
                description,
              },
            ],
          },
          id: `contact-form-${Date.now()}`,
        }),
      }
    );

    if (!sharpSpringRes.ok) {
      const text = await sharpSpringRes.text();
      console.error(`[api/contact] SharpSpring HTTP ${sharpSpringRes.status}:`, text);
      return Response.json({ success: false, error: `SharpSpring returned HTTP ${sharpSpringRes.status}` }, { status: 502 });
    }

    const data = await sharpSpringRes.json();
    const createResult = data?.result?.creates?.[0];
    const failed = Boolean(data?.error) || Boolean(createResult?.error);

    if (failed) {
      console.error("[api/contact] SharpSpring rejected the lead:", JSON.stringify(data));
      return Response.json(
        { success: false, error: data?.error?.message || createResult?.error?.message || "SharpSpring rejected the lead" },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[api/contact] Could not reach SharpSpring:", err instanceof Error ? err.message : err);
    return Response.json({ success: false, error: "Could not reach SharpSpring" }, { status: 502 });
  }
}
