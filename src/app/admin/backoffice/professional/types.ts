export interface IProfessional {
  id: number;
  documentId: string;
  name: string;
  email: string;
  telephone: string;
  slug: string;
  city: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  imgProfile: ImgProfile;
  imgWorks: ImgWork[];
}

export interface ImgProfile {
  id: number;
  documentId: string;
  url: string;
}

export interface ImgWork {
  id: number;
  documentId: string;
  url: string;
}
