import { db } from '@/lib/db';
import { upLoadImage } from '@/lib/upLoadImage';
import { NextResponse } from 'next/server';

const IMAGE_VALUE = 'logo';

export async function POST(req) {
  try {
    const formData = await req.formData();

    const urlImages = upLoadImage(formData, IMAGE_VALUE);

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

// PATCH images
export async function PATCH(req) {
  try {
    const formData = await req.formData();

    const carId = formData.get('id');
    const car = await db.carList.findUnique({ where: { id: carId } });

    if (!car) {
      throw new Error(`Car id not found`);
    }

    const images = formData.getAll('image');

    const urlImages = [];
    const cloudFormData = new FormData();

    for (const image of images) {
      cloudFormData.append('file', image);
      cloudFormData.append('upload_preset', 'ojlqsb85');

      const response = await fetch(url, {
        method: 'POST',
        body: cloudFormData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      urlImages.push(data.secure_url);
    }

    const newCar = { ...car, image: [...car.image, ...urlImages] };
    const { id, ...data } = newCar;

    const result = await db.carList.update({
      where: { id },
      data: {
        ...data,
      },
      include: {
        brand: {},
      },
    });

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
