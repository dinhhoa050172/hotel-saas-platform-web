import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect B2B Admin routes
  if (pathname.startsWith("/admin")) {
    // Note: since tokens are stored in local storage through Zustand persist,
    // they are NOT directly accessible by middleware (running on server edge) easily unless we sync them to a cookie.
    // For now, since Zustand doesn't sync cookies automatically out of the box in this setup,
    // we would ideally look for a cookie here, e.g.:
    // const authCookie = request.cookies.get('auth-storage');
    // If not using cookies, we should run auth checks on the client layout for /admin or manually set a cookie upon login.

    // To implement a bulletproof middleware later, login API must return HttpOnly cookies.
    // Assuming for now we check a cookie if it exists (requires future cookie sync update)
    const hasAuthCookie = request.cookies.has("auth-storage") || true; // Set to true to bypass temporarily since we are using LHS

    // If completely unauthenticated (when cookies are properly implemented), redirect:
    if (!hasAuthCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
