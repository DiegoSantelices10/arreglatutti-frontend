import Link from 'next/link';
import React, { FC } from 'react';

const dataQueries = [
  {
    id: '1',
    name: 'Gasista',
    date: '20/02/2025',
    professional: 'Diego Santelices',
  },
  {
    id: '2',
    name: 'Electricista',
    date: '24/02/2025',
    professional: 'Martin Palerno',
  },
  {
    id: '3',
    name: 'Plomero',
    date: '10/02/2025',
    professional: 'Javier Milei',
  },
];

const MyQueries: FC = () => {
  console.log('MyQueries');

  return (
    <div className="bg-[#FAFAFB] z-50 pb-10 pt-20 ">
      <div className="absolute w-full h-20 rounded-b-3xl bg-primary -z-10" />
      <div className="px-4 md:px-12 space-y-6">
        <div className="bg-white rounded-md p-6 mt-10 md:mx-auto md:w-1/2">
          <h1 className="text-lg text-primary text-center font-bold">
            Mis consultas
          </h1>
        </div>
        <div className="grid gap-6">
          {dataQueries.map((query) => (
            <Link href={`/queries/${query.id}`} key={query.id}>
              <div className="shadow-md space-y-2 rounded-md p-4 bg-white">
                <div className="flex text-primary font-medium justify-between items-center">
                  <h1>{query.name}</h1>
                  <h2>{query.date}</h2>
                </div>
                <div>
                  <h1 className="text-textSecondary">{query.professional}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
