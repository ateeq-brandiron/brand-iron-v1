import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The site was resolving live at both brandiron.net and www.brandiron.net
// with no redirect between them - classic duplicate-content setup that
// splits ranking signals and leaves search engines to guess which host to
// index. Every canonical URL, metadataBase, and og:url in this codebase
// already hardcodes the non-www host, so that's the de facto standard;
// this enforces it at the edge for any request that arrives on www.
const CANONICAL_HOST = "brandiron.net";

// Canonical URL structure is trailing-slash (domain.com/services/, not
// domain.com/services) - per Alberto/SEO, running both forms live is a
// duplicate-content setup identical in spirit to the www/non-www issue
// above. Static asset requests (anything with a file extension in its last
// segment, e.g. /images/foo.jpg, /sitemap.xml) and /api/* routes are left
// alone - neither should ever gain a trailing slash.
function needsTrailingSlash(pathname: string): boolean {
  if (pathname === "/" || pathname.endsWith("/")) return false;
  if (pathname === "/api" || pathname.startsWith("/api/")) return false;
  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  return !lastSegment.includes(".");
}

// Legacy WordPress-era URLs that used to mass-redirect to the homepage
// instead of their real current equivalent, which both loses topical
// relevance for SEO and risks Google treating the pattern as a soft 404.
// Middleware runs before Next's own trailing-slash normalization, so
// matching here (trailing slash or not) resolves in a single hop instead
// of chaining through that normalization redirect first. Destinations are
// already in the canonical trailing-slash form.
const LEGACY_REDIRECTS: { pattern: RegExp; destination: string }[] = [
  { pattern: /^\/gtm-strategy\/?$/, destination: "/services/gtm/" },
  { pattern: /^\/cap-raise-decks\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/pitch-deck\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/pitch-deck-strategies\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/pitch-deck-structure-for-success\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/website-development\/?$/, destination: "/services/website-development/" },
  { pattern: /^\/process\/?$/, destination: "/about/" },
  // These 4 are pending an editorial call (republish on /blog vs. redirect) -
  // see the redirect remapping doc from Alberto. Falling back to the closest
  // matching service page for now so they're off the blanket homepage
  // redirect; swap the destination if/when the content team republishes them.
  { pattern: /^\/the-4-types-of-pitch-decks\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/why-your-startup-pitch-deck-matters-more-than-you-think\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/avoid-costly-launch-mistakes-with-go-to-market-strategy-consulting\/?$/, destination: "/services/gtm/" },
  { pattern: /^\/is-go-to-market-strategy-a-skill-heres-why-it-matters\/?$/, destination: "/services/gtm/" },
  // Second batch from Alberto's Search Console broken-link export (Aug 2026).
  { pattern: /^\/automation\/?$/, destination: "/services/revenue-engineering/" },
  { pattern: /^\/brand-champion\/?$/, destination: "/services/brand-strategy/" },
  { pattern: /^\/branding\/?$/, destination: "/services/brand-strategy/" },
  { pattern: /^\/investor-outreach\/?$/, destination: "/services/capital-raise/" },
  { pattern: /^\/result\/?$/, destination: "/case-studies/" },
  // Temporary landing spot, not a content match - there's no current page
  // for "industries we serve" (Alberto flagged this as a content decision,
  // not a redirect-mapping one). Points to Portfolio for now; swap this
  // once a real /industries page gets built.
  { pattern: /^\/industries\/?$/, destination: "/portfolio/" },
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
  const { pathname, search } = request.nextUrl;

  // Checked first, ahead of the host/slash normalization below - these
  // destinations are already absolute-canonical (correct host, trailing
  // slash), so a legacy URL redirects in one hop even if it also arrived
  // on www or missing its slash.
  const redirect = LEGACY_REDIRECTS.find(({ pattern }) => pattern.test(pathname));
  if (redirect) {
    // Built from a fixed origin rather than new URL(request.url) - behind
    // the production reverse proxy, request.url reflects the internal port
    // the Node process is actually listening on (e.g. :3000), which leaked
    // into earlier redirects instead of the public-facing https://brandiron.net.
    return NextResponse.redirect(new URL(redirect.destination, `https://${CANONICAL_HOST}`), 308);
  }

  const host = request.headers.get("host") ?? "";
  const wrongHost = host === `www.${CANONICAL_HOST}`;
  const missingSlash = needsTrailingSlash(pathname);
  if (wrongHost || missingSlash) {
    const finalPathname = missingSlash ? `${pathname}/` : pathname;
    // Same fixed-origin approach as above - new URL(path, request.url)
    // would inherit the same internal-port leak.
    const url = new URL(`${finalPathname}${search}`, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(url, 308);
  }

  if (NOINDEX_PATTERNS.some(pattern => pattern.test(pathname))) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  return NextResponse.next();
}

// Broad matcher (excludes Next's internal static/image-optimization assets
// and favicon) so the www/trailing-slash checks above run on every route,
// not just the legacy-URL list. The legacy redirect/noindex checks below
// still key off their own path patterns within this same function.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
