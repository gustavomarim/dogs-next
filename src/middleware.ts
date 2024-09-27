import { NextRequest, NextResponse } from "next/server";
import verifyToken from "./functions/verify-token";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const authenticated = token ? await verifyToken(token) : false;

  // verificar se está autenticado e se esta tentando entrar em conta
  if (!authenticated && request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // verifica se está autenticado e se está tentando entrar em login
  if (authenticated && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/conta", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/conta/:path*", "/login/:path*"],
};
