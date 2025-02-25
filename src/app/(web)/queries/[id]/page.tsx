import Button from '@/components/custom/Button';
import CreateQueryForm from '@/components/Query/CreateQueryForm';
import React, { FC } from 'react';

interface IQueryDetailProps {
  params: Promise<{ id: string }>;
}

const QueryDetail: FC<IQueryDetailProps> = async ({ params }) => {
  const { id } = await params;

  console.log('QueryDetail', id);

  return (
    <div className="bg-[#FAFAFB] z-50 pb-10 pt-20 ">
      <div className="absolute w-full h-20 rounded-b-3xl bg-primary -z-10" />
      <div className="px-4 md:px-14 space-y-10">
        <div className="bg-white rounded-md p-6 mt-10 md:mx-auto md:w-1/2">
          <h1 className="text-lg text-primary text-center font-bold">
            Detalle de consulta
          </h1>
        </div>
        <div className="space-y-4 pb-24 overflow-y-auto">
          <div>
            <div className="space-y-2 w-10/12 md:w-8/12 rounded-xl p-4 bg-secondary/20">
              <p className="text-sm">
                Hola buenas tardes, necesito presuepuesto para una instalación
                completa .
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="space-y-2 rounded-xl p-4 md:w-8/12 w-10/12 bg-gray-100">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                voluptates quo nihil sed odit fugiat perferendis!
              </p>
            </div>
          </div>
          <div>
            <div className="space-y-2 md:w-8/12 w-10/12 rounded-xl p-4 bg-secondary/20">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident excepturi quibusdam id. Quia, iure facilis?
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="space-y-2 rounded-xl p-4 md:w-8/12 w-10/12 bg-gray-100">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                voluptates quo nihil sed odit fugiat perferendis!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFB] fixed w-full p-4 bottom-0 space-y-2">
        <div className="md:flex md:justify-between md:items-end md:gap-2  md:space-y-0 space-y-2">
          <CreateQueryForm />
          <Button className="w-full md:w-1/4">Aceptar propuesta</Button>
        </div>
      </div>
    </div>
  );
};

export default QueryDetail;
