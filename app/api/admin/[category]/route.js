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
export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get('name');
    console.log(formData);
    return NextResponse.json({ name });

    return NextResponse.json(res);
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
