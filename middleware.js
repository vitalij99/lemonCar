import { NextResponse } from 'next/server';

// private toute
export async function middleware(request) {
  if (request.nextUrl.pathname.endsWith('/admin')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token');
  if (!token) return NextResponse.redirect(new URL('/admin', request.url));

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
};
