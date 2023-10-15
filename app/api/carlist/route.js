import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

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
    if (!data.deletImage) {
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
      const { id, deletImage } = data;

      const car = await db.carList.findUnique({ where: { id: id } });
      const newImage = car.image.filter(img => img !== deletImage);

      // cloudenari delete

      const result = await db.carList.update({
        where: { id },
        data: {
          image: newImage,
        },
        include: {
          brand: {},
        },
      });

      return NextResponse.json(result);
    }
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
