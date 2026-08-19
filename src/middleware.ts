import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

  const redirect = LEGACY_REDIRECTS.find(({ pattern }) => pattern.test(pathname));
  if (redirect) {
    return NextResponse.redirect(new URL(redirect.destination, request.url), 308);
  }

  if (NOINDEX_PATTERNS.some(pattern => pattern.test(pathname))) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/author/:path*",
    "/tag/:path*",
    "/branding-2", "/branding-2/",
    "/gtm-strategy", "/gtm-strategy/",
    "/cap-raise-decks", "/cap-raise-decks/",
    "/pitch-deck", "/pitch-deck/",
    "/pitch-deck-strategies", "/pitch-deck-strategies/",
    "/pitch-deck-structure-for-success", "/pitch-deck-structure-for-success/",
    "/website-development", "/website-development/",
    "/process", "/process/",
    "/the-4-types-of-pitch-decks", "/the-4-types-of-pitch-decks/",
    "/why-your-startup-pitch-deck-matters-more-than-you-think", "/why-your-startup-pitch-deck-matters-more-than-you-think/",
    "/avoid-costly-launch-mistakes-with-go-to-market-strategy-consulting", "/avoid-costly-launch-mistakes-with-go-to-market-strategy-consulting/",
    "/is-go-to-market-strategy-a-skill-heres-why-it-matters", "/is-go-to-market-strategy-a-skill-heres-why-it-matters/",
  ],
};
