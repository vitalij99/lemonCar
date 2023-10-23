import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log('tut');

  try {
    const { comment, phone } = await req.json();

    return NextResponse.json({ comment, phone });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
