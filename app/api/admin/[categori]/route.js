import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const result = await db.carList.findMany();

    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
