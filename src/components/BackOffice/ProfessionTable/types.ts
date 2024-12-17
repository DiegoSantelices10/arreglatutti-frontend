/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IProfession {
    id: number
    documentId: string
    name: string
    slug: string
    image: string
  }

export interface IProsessionTable {
    data: IProfession[];
    actions?: any;
}