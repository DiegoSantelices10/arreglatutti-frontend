import { uploadImage, updateImage, deleteImage } from '@/utils/cloudinary';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { imageBase64 } = await req.json();

  if (!imageBase64) {
    return NextResponse.json({ message: 'No image provided' }, { status: 400 });
  }

  try {
    const response = await uploadImage(imageBase64);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Upload failed', error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const { imageBase64, public_id } = await req.json();

  if (!imageBase64 || !public_id) {
    return NextResponse.json(
      { message: 'Image and public_id are required' },
      { status: 400 }
    );
  }

  try {
    const response = await updateImage(imageBase64, public_id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Update failed', error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const public_id = searchParams.get('id');

  if (!public_id) {
    return NextResponse.json(
      { message: 'public_id is required' },
      { status: 400 }
    );
  }

  try {
    const response = await deleteImage(public_id);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Delete failed', error },
      { status: 500 }
    );
  }
}
