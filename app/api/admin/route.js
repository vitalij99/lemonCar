import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { password: passwordUser, login: loginUser } = await req.json();
    if (!passwordUser || !loginUser)
      return NextResponse('wrong', { status: 401 });

    const admin = await db.admin.findFirst();

    if (admin.password === passwordUser && admin.login === loginUser) {
      return NextResponse.json({ token: 'login' });
    }

    return new NextResponse('wrong', { status: 401 });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
