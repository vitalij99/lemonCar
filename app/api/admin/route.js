import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

import { db } from '@/lib/db';
import { authUser } from '@/lib/auth';

// password hash
export async function POST(req) {
  try {
    const { password: passwordUser, login: loginUser } = await req.json();
    if (!passwordUser || !loginUser)
      return NextResponse('wrong', { status: 401 });

    const admin = await db.admin.findFirst();

    if (admin.password === passwordUser && admin.login === loginUser) {
      const accessToken = jwt.sign(
        { user: admin.login },
        process.env.TokenSecret,
        {
          expiresIn: '3h',
        }
      );

      await db.admin.update({
        where: { id: admin.id },
        data: {
          accessToken: accessToken,
        },
      });
      const response = NextResponse.json({ token: accessToken });
      response.cookies.set('token', accessToken);
      return response;
    }

    return new NextResponse('wrong', { status: 401 });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
export async function PATCH(req) {
  try {
    const admin = authUser(req);
    const { password: passwordUser, login: loginUser } = await req.json();

    if (!passwordUser || !loginUser)
      return NextResponse('wrong', { status: 401 });

    const newAdmin = await db.admin.update({
      where: { id: admin.id },
      data: { login, password },
    });

    return NextResponse.json(newAdmin);
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
