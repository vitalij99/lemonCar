import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const messageForm = await req.json();

    // add to bd

    const newComment = await db.forma.create({
      data: {
        ...messageForm,
      },
    });

    return NextResponse.json(newComment);
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
