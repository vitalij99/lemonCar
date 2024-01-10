import { authUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { deleteImageCloudinary } from '@/lib/upLoadImage';
import { NextResponse } from 'next/server';

const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY}/image/upload`;

export async function GET(req) {
  try {
    await authUser(req);

    const result = await db.carList.findMany();

    return NextResponse.json(result);
  } catch (error) {
    if (error === 'wrong authorization') {
      const response = new NextResponse('wrong authorization', { status: 401 });
      response.cookies.delete('token');

      return response;
    } else {
      return new NextResponse(error, { status: 500 });
    }
  }
}

export async function POST(req) {
  try {
    await authUser(req);

    const formData = await req.formData();
    formData.delete('id');

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

    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    formDataObject.image = urlImages;

    const result = await db.carList.create({ data: formDataObject });

    return NextResponse.json(result, { status: result.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

// PATCH images
export async function PATCH(req) {
  try {
    await authUser(req);

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
export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
      return new NextResponse('Error id', { status: 404 });
    }

    await authUser(req);

    const car = await db.carList.findUnique({ where: { id: id } });
    if (!car) {
      return new NextResponse('Car not found', { status: 404 });
    }
    const result = await db.carList.delete({
      where: { id },
      include: { commit: true },
    });
    car.image.map(img => deleteImageCloudinary(img));
    return NextResponse.json(result);
  } catch (error) {
    if (error === 'wrong authorization') {
      const response = new NextResponse('wrong authorization', { status: 401 });
      response.cookies.delete('token');

      return response;
    } else {
      return new NextResponse(error, { status: 500 });
    }
  }
}
