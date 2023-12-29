import { authUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    const admin = await authUser(req);
    if (!admin) return new NextResponse('wrong authorization', { status: 401 });

    const result = await db.forma.findMany();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req, res) {
  try {
    const admin = await authUser(req);
    if (!admin) return new NextResponse('wrong authorization', { status: 401 });
    const { id, ...data } = await req.json();

    const result = await db.forma.update({
      where: { id },
      data: {
        ...data,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
export async function DELETE(req, res) {
  try {
    const id = req.nextUrl.searchParams.get('id');

    if (!id) return new NextResponse('Error id', { status: 404 });

    const admin = await authUser(req);
    if (!admin) return new NextResponse('wrong authorization', { status: 401 });

    const result = await db.forma.delete({ where: { id } });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
