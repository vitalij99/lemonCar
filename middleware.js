import { NextResponse } from 'next/server';
import { authUser } from './lib/auth';

export async function middleware(request) {
  const user = await authUser(request);
  if (!user) return new NextResponse('WWW-Authenticate', { status: 401 });
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/admin/:path*',
};
