/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IProfession {
  _id: number;
  name: string;
}

export interface IProsessionTable {
  data: IProfession[];
  actions?: any;
}
