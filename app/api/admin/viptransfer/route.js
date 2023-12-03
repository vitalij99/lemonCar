import { db } from '@/lib/db';
import { deleteImageCloudinary, upLoadImage } from '@/lib/upLoadImage';
import { NextResponse } from 'next/server';

const IMAGE_VALUE = 'foto';
const FOLDER_NAME = 'transfer';

export async function GET() {
  try {
    const result = await db.transfer.findMany();

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    formData.delete('id');

    const urlImages = await upLoadImage(formData, IMAGE_VALUE, FOLDER_NAME);

    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    formDataObject[IMAGE_VALUE] = urlImages[0];

    const result = await db.transfer.create({ data: formDataObject });

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const formData = await req.formData();

    const transferId = formData.get('id');
    const transfer = await db.transfer.findUnique({
      where: { id: transferId },
    });

    if (!transfer) {
      throw new Error(`transfer id not found`);
    }

    const data = {};

    const foto = formData.get(IMAGE_VALUE);

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    if (foto) {
      const urlImages = await upLoadImage(formData, IMAGE_VALUE, FOLDER_NAME);
      await deleteImageCloudinary(transfer.foto);

      data[IMAGE_VALUE] = urlImages[0];
    }
    const { id, ...pass } = data;

    const result = await db.transfer.update({
      where: { id },
      data: {
        ...pass,
      },
    });

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return new NextResponse('Error id', { status: 404 });
  }

  try {
    const result = await db.transfer.delete({
      where: { id },
      include: { forma: true },
    });

    deleteImageCloudinary(result.foto);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
