import { NextResponse } from 'next/server';
import { LINK } from './lib/link';

export async function middleware(req, res) {
  console.log('middleware');

  const accessToken = req.headers.authorization;
  console.log(accessToken);

  if (!accessToken) {
    return NextResponse.redirect(new URL(LINK.admin, req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    '/admin/brand/:path*',
    '/admin/viptransver/:path*',
    '/admin/message/:path*',
    '/admin/carlist/:path*',
  ],
};
