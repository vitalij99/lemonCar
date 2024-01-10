import { authUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    await authUser(req);

    const result = await db.forma.findMany();
    return NextResponse.json(result);
  } catch (error) {
    if (error === 'wrong authorization') {
      return new NextResponse('wrong authorization', { status: 401 });
    } else {
      return new NextResponse('Internal Error', { status: 500 });
    }
  }
}

export async function PATCH(req, res) {
  try {
    await authUser(req);

    const { id, ...data } = await req.json();

    const result = await db.forma.update({
      where: { id },
      data: {
        ...data,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error === 'wrong authorization') {
      return new NextResponse('wrong authorization', { status: 401 });
    } else {
      return new NextResponse('Internal Error', { status: 500 });
    }
  }
}
export async function DELETE(req, res) {
  try {
    const id = req.nextUrl.searchParams.get('id');

    if (!id) return new NextResponse('Error id', { status: 404 });

    await authUser(req);

    const result = await db.forma.delete({ where: { id } });
    return NextResponse.json(result);
  } catch (error) {
    if (error === 'wrong authorization') {
      return new NextResponse('wrong authorization', { status: 401 });
    } else {
      return new NextResponse('Internal Error', { status: 500 });
    }
  }
}
