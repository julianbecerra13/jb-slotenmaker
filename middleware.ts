import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.jbslotenmaker.nl";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  // Redirect jbslotenmaker.nl (sin www) -> www.jbslotenmaker.nl
  if (host === "jbslotenmaker.nl") {
    const url = new URL(`https://${CANONICAL_HOST}${pathname}${search}`);
    return NextResponse.redirect(url, 308);
  }

  // Redirect *.vercel.app -> www.jbslotenmaker.nl
  if (host.endsWith(".vercel.app")) {
    const url = new URL(`https://${CANONICAL_HOST}${pathname}${search}`);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4)$).*)",
  ],
};
