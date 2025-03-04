/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export interface ICloudinaryResponse {
  url: string;
  public_id: string;
  fileName: string;
}

export const uploadImages = async (
  images: {
    url: string;
    fileName: string;
  }[]
) => {
  try {
    const base64Images = images.filter((img) => img.url.startsWith('data'));
    const nonBase64Images = images.filter((img) => !img.url.startsWith('data'));
    const uploadResponses = await Promise.all(
      base64Images.map(async (img) => {
        const { data } = await axios.post('/api/cloudinary', {
          imageBase64: img.url,
        });
        return {
          fileName: img.fileName,
          url: data.secure_url,
          public_id: data.public_id,
        };
      })
    );

    // Combinamos las respuestas de imágenes base64 con las no base64
    const finalResponses = [...uploadResponses, ...nonBase64Images];

    return {
      status: 200,
      data: finalResponses,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: error?.message,
    };
  }
};

export const uploadImageUser = async (images: any) => {
  try {
    const { data } = await axios.post('/api/cloudinary', {
      imageBase64: images.url,
    });
    return {
      status: 200,
      url: data.secure_url,
      public_id: data.public_id,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: error?.message,
    };
  }
};

export const updateImageUser = async (public_id: string, images: string) => {
  try {
    const { data } = await axios.put('/api/cloudinary', {
      imageBase64: images,
      public_id,
    });

    return {
      status: 200,
      url: data.secure_url,
      public_id: data.public_id,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: error?.message,
    };
  }
};

export const deleteImage = async (public_id: string) => {
  try {
    const { data } = await axios.delete(`/api/cloudinary`, {
      params: { id: public_id },
    });
    return {
      status: 200,
      data,
    };
  } catch (error: any) {
    return {
      status: error?.status,
      data: error?.message,
    };
  }
};
