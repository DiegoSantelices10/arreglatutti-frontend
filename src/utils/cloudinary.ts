/* eslint-disable @typescript-eslint/no-explicit-any */
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.API_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadImage = async (filePath: any) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'aquiles-soluciones',
  });
};

export const updateImage = async (filePath: any, public_id: any) => {
  return await cloudinary.uploader.upload(filePath, {
    public_id,
    overwrite: true,
  });
};

export const deleteImage = async (public_id: any) => {
  return await cloudinary.uploader.destroy(public_id);
};
