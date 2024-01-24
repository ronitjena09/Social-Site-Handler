import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value || "";
  const isPublicPath =
    path === "/" || path === "/loginpage/signup" || path === "/loginpage/login";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/mainpage", req.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/loginpage/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/mainpage", "/loginpage/signup", "/loginpage/login"],
};
