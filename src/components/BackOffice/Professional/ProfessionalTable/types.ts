/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProfessionalTableProps {
  professionals: any[];
  professions: any[];
  cities: any[];
  actions?: any;
  onSuccess: () => Promise<void>;
}
