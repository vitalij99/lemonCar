import { getCarByID } from '@/lib/carList';
import { db } from '@/lib/db';
import { CAR_DEPOSIT, getDiffDays, procentraPrice } from '@/lib/values';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { carId, dataFirst, dataLast, ...messageForm } = await req.json();
    if (carId) {
      const car = await getCarByID(carId);

      const price = Number(car.price);
      const deposit = price * CAR_DEPOSIT;
      const diffInDays = getDiffDays(dataFirst, dataLast);
      const totalPrise =
        diffInDays <= 0
          ? price
          : procentraPrice(price, diffInDays) * diffInDays;

      const newComment = await db.forma.create({
        data: {
          ...messageForm,
          carId,
          dataFirst,
          dataLast,
          price,
          deposit,
          totalPrise,
          diffInDays,
        },
      });

      return NextResponse.json(newComment);
    } else {
      const newComment = await db.forma.create({
        data: {
          ...messageForm,
        },
      });

      return NextResponse.json(newComment);
    }

    // add to bd
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
