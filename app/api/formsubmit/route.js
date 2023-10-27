import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { comment, phone } = await req.json();

    console.log({ comment, phone });

    // add to bd

    return NextResponse.json({ comment, phone });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
