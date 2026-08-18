import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Legacy WordPress-era URLs that no longer exist. They fall through to the
// homepage redirect (see app/not-found.tsx) rather than a real 404, so the
// redirect alone isn't a reliable "don't index this" signal — tell search
// engines explicitly via X-Robots-Tag instead. Middleware runs before
// Next's own trailing-slash normalization, so this applies to the exact
// URL a crawler requests, trailing slash or not.
const NOINDEX_PATTERNS = [
  /^\/author(\/|$)/,
  /^\/tag(\/|$)/,
  /^\/branding-2\/?$/,
  /^\/cap-raise-decks\/?$/,
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (NOINDEX_PATTERNS.some(pattern => pattern.test(pathname))) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/author/:path*", "/tag/:path*", "/branding-2", "/branding-2/", "/cap-raise-decks", "/cap-raise-decks/"],
};
