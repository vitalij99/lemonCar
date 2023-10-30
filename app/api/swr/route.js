export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
