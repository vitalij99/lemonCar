import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

const url = 'https://api.cloudinary.com/v1_1/dizrnyvqx/image/upload';

cloudinary.config({
  cloud_name: 'dizrnyvqx',
  api_key: '864124585882834',
  api_secret: 'aTZfRMUGZ_JeaUtDn1cokgBJ--o',
  secure: true,
});

export async function GET(req) {
  try {
    const result = await db.carList.findMany();

    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const images = formData.getAll('image');
    const name = formData.get('name');

    const results = [];
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
      results.push(data.url);
    }

    return NextResponse.json(results, { status: results.status });
  } catch (error) {
    console.log('[SERVERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
