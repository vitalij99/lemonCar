import { getCarByID } from '@/lib/carList';
import { db } from '@/lib/db';
import { CAR_DEPOSIT, getDiffDays, procentraPrice } from '@/lib/values';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { carId, dataFirst, dataLast, ...messageForm } = await req.json();

    let commentData = { ...messageForm };

    if (carId) {
      const car = await getCarByID(carId);
      const price = Number(car.price);
      const deposit = price * CAR_DEPOSIT;
      const diffInDays = getDiffDays(dataFirst, dataLast);
      const totalPrice =
        diffInDays <= 0
          ? price
          : procentraPrice(price, diffInDays) * diffInDays;

      // add to bd
      commentData = {
        ...messageForm,
        carId,
        dataFirst,
        dataLast,
        price,
        deposit,
        totalPrice,
        diffInDays,
      };
    }

    const newComment = await db.forma.create({ data: commentData });

    return new NextResponse.json({
      comment: newComment.comment,
      phone: newComment.phone,
    });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
