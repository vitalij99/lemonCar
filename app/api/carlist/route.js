// import { db } from '@/lib/db';
// import { deleteImageCloudinary } from '@/lib/upLoadImage';
// import { NextResponse } from 'next/server';

// export async function PATCH(req) {
//   try {
//     const data = await req.json();

//     if (!data) return NextResponse('wrong');
//     else if (data.id === undefined) return NextResponse('wrong id car');
//     else if (!data.deleteImage) {
//       const { id, ...newCar } = data;

//       const result = await db.carList.update({
//         where: { id },
//         data: {
//           ...newCar,
//         },
//         include: {
//           brand: {},
//         },
//       });

//       return NextResponse.json(result);
//     } else {
//       const { id, deleteImage } = data;

//       const car = await db.carList.findUnique({ where: { id: id } });
//       const newImage = car.image.filter(img => img !== deleteImage);

//       // cloudenari delete

//       deleteImageCloudinary(deleteImage);

//       const result = await db.carList.update({
//         where: { id },
//         data: {
//           image: newImage,
//         },
//       });

//       return NextResponse.json(result);
//     }
//   } catch (error) {
//     console.log('[SERVERS_POST]', error);
//     return new NextResponse(error.message, { status: 500 });
//   }
// }
