/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IProfession {
  _id: string;
  name: string;
}

export interface IProsessionTable {
  professions: IProfession[];
  actions?: any;
}
