import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY,
  api_key: process.env.APIKey,
  api_secret: process.env.APISecret,
});

export async function POST(req) {
  try {
    const car = await req.json();
    if (!car) return NextResponse('wrong');

    const newCar = await db.carList.create({
      data: {
        ...car,
      },
      include: {
        brand: car.carBrand,
      },
    });

    return NextResponse.json(newCar);
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const data = await req.json();

    if (!data) return NextResponse('wrong');
    else if (data.id === undefined) return NextResponse('wrong id car');
    else if (!data.deleteImage) {
      const { id, ...newCar } = data;

      const result = await db.carList.update({
        where: { id },
        data: {
          ...newCar,
        },
        include: {
          brand: {},
        },
      });

      return NextResponse.json(result);
    } else {
      const { id, deleteImage } = data;

      const car = await db.carList.findUnique({ where: { id: id } });
      const newImage = car.image.filter(img => img !== deleteImage);

      // cloudenari delete
      const publicId = deleteImage.match(/\/v\d+\/(.+?)(?:\.\w+)?$/)[1];

      await cloudinary.uploader.destroy(publicId);

      const result = await db.carList.update({
        where: { id },
        data: {
          image: newImage,
        },
      });

      return NextResponse.json(result);
    }
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
