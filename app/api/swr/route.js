export const dynamic = 'force-dynamic';
export const revalidate = 30;

import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    const result = await db.forma.findMany();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req, res) {
  const { id, ...data } = await req.json();

  const result = await db.forma.update({
    where: { id },
    data: {
      ...data,
    },
  });

  return NextResponse.json(result);
}
export async function DELETE(req, res) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return new NextResponse('Error id', { status: 404 });
  }

  try {
    const result = await db.forma.delete({ where: { id } });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
