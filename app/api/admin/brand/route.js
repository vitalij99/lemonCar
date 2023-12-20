import { authUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { deleteImageCloudinary, upLoadImage } from '@/lib/upLoadImage';
import { NextResponse } from 'next/server';

const IMAGE_VALUE = 'logo';
const FOLDER_NAME = 'brand';

//next try
export async function POST(req) {
  try {
    const formData = await req.formData();

    const urlImages = await upLoadImage(formData, IMAGE_VALUE, FOLDER_NAME);

    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    formDataObject[IMAGE_VALUE] = urlImages[0];

    const result = await db.brand.create({ data: formDataObject });

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const formData = await req.formData();
    formData.delete('id');

    const brandId = formData.get('id');
    const brand = await db.brand.findUnique({ where: { id: brandId } });

    if (!brand) {
      throw new Error(`Brand id not found`);
    }

    const data = {};

    const logo = formData.get(IMAGE_VALUE);

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    if (logo) {
      const urlImages = await upLoadImage(formData, IMAGE_VALUE, FOLDER_NAME);
      await deleteImageCloudinary(brand.logo);

      data[IMAGE_VALUE] = urlImages[0];
    }
    const { id, ...newBrands } = data;

    const result = await db.brand.update({
      where: { id },
      data: {
        ...newBrands,
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
    const result = await db.brand.delete({
      where: { id },
      include: { cars: true },
    });

    deleteImageCloudinary(result.logo);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
