import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The site was resolving live at both brandiron.net and www.brandiron.net
// with no redirect between them - classic duplicate-content setup that
// splits ranking signals and leaves search engines to guess which host to
// index. Every canonical URL, metadataBase, and og:url in this codebase
// already hardcodes the non-www host, so that's the de facto standard;
// this enforces it at the edge for any request that arrives on www.
const CANONICAL_HOST = "brandiron.net";

// Legacy WordPress-era URLs that used to mass-redirect to the homepage
// instead of their real current equivalent, which both loses topical
// relevance for SEO and risks Google treating the pattern as a soft 404.
// Middleware runs before Next's own trailing-slash normalization, so
// matching here (trailing slash or not) resolves in a single hop instead
// of chaining through that normalization redirect first.
const LEGACY_REDIRECTS: { pattern: RegExp; destination: string }[] = [
  { pattern: /^\/gtm-strategy\/?$/, destination: "/services/gtm" },
  { pattern: /^\/cap-raise-decks\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/pitch-deck\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/pitch-deck-strategies\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/pitch-deck-structure-for-success\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/website-development\/?$/, destination: "/services/website-development" },
  { pattern: /^\/process\/?$/, destination: "/about" },
  // These 4 are pending an editorial call (republish on /blog vs. redirect) -
  // see the redirect remapping doc from Alberto. Falling back to the closest
  // matching service page for now so they're off the blanket homepage
  // redirect; swap the destination if/when the content team republishes them.
  { pattern: /^\/the-4-types-of-pitch-decks\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/why-your-startup-pitch-deck-matters-more-than-you-think\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/avoid-costly-launch-mistakes-with-go-to-market-strategy-consulting\/?$/, destination: "/services/gtm" },
  { pattern: /^\/is-go-to-market-strategy-a-skill-heres-why-it-matters\/?$/, destination: "/services/gtm" },
  // Second batch from Alberto's Search Console broken-link export (Aug 2026).
  // /industries intentionally omitted - no current page covers it, and
  // Alberto flagged it as a content decision (rebuild vs. fold into
  // Case Studies/Portfolio) rather than a redirect-mapping question.
  { pattern: /^\/automation\/?$/, destination: "/services/revenue-engineering" },
  { pattern: /^\/brand-champion\/?$/, destination: "/services/brand-strategy" },
  { pattern: /^\/branding\/?$/, destination: "/services/brand-strategy" },
  { pattern: /^\/investor-outreach\/?$/, destination: "/services/capital-raise" },
  { pattern: /^\/result\/?$/, destination: "/case-studies" },
];

// Legacy WordPress-era URLs that no longer exist and have no real
// replacement page. They fall through to the homepage redirect (see
// app/not-found.tsx) rather than a real 404, so the redirect alone isn't a
// reliable "don't index this" signal — tell search engines explicitly via
// X-Robots-Tag instead.
const NOINDEX_PATTERNS = [
  /^\/author(\/|$)/,
  /^\/tag(\/|$)/,
  /^\/branding-2\/?$/,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const host = request.headers.get("host") ?? "";
  if (host === `www.${CANONICAL_HOST}`) {
    // Built from fixed values rather than new URL(request.url) - behind the
    // production reverse proxy, request.url reflects the internal port the
    // Node process is actually listening on (e.g. :3000), which leaked into
    // earlier redirects instead of the public-facing https://brandiron.net.
    const url = new URL(`${pathname}${request.nextUrl.search}`, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(url, 308);
  }

  const redirect = LEGACY_REDIRECTS.find(({ pattern }) => pattern.test(pathname));
  if (redirect) {
    // Same fixed-origin approach as the www redirect above - new URL(dest,
    // request.url) would inherit the same internal-port leak.
    return NextResponse.redirect(new URL(redirect.destination, `https://${CANONICAL_HOST}`), 308);
  }

  if (NOINDEX_PATTERNS.some(pattern => pattern.test(pathname))) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  return NextResponse.next();
}

// Broad matcher (excludes Next's internal static/image-optimization assets
// and favicon) so the www -> non-www host check above runs on every route,
// not just the legacy-URL list. The legacy redirect/noindex checks below
// still key off their own path patterns within this same function.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
