import { socket } from '@/pages/api/socket/io';
import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log('tut');

  try {
    const { comment, phone } = await req.json();
    console.log(socket);
    // socket.emit('message', { comment, phone });

    return NextResponse.json({ comment, phone });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
