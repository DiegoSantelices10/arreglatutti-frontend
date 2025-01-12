/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfessionTable from '@/components/BackOffice/Profession/ProfessionTable';
import Button from '@/components/custom/Button';
import HeaderTitle from '@/components/custom/HeaderTitle';
import { getProfessions } from '@/services/profesion';
import Link from 'next/link';

const Profession = async () => {
  const { data } = await getProfessions();

  return (
    <div className="space-y-8">
      <HeaderTitle title="Profesiones" />
      <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3 flex justify-start">
            <Link href={'/admin/backoffice/profession/create'}>
              <Button className="w-full md:w-auto">Agregar profesión</Button>
            </Link>
          </div>
        </div>
        <div className="py-4">
          <ProfessionTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Profession;
