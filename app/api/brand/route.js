import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data) return NextResponse('wrong');

    const { brand } = data;

    const newBrand = await db.carList.create({
      data: {
        brand,
      },
    });

    return NextResponse.json(newBrand);
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const result = await db.brand.findMany();

    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
