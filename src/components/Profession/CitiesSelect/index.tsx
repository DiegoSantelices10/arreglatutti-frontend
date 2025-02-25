/* eslint-disable @typescript-eslint/no-explicit-any */
import ControllerSelect from '@/components/custom/ControllerSelect';
import { Skeleton } from '@/components/ui/skeleton';
import { getCities } from '@/services/city';
import React, { FC, useEffect, useState } from 'react';

interface ICitiesSelectProps {
  control: any;
  name: string;
  placeholder?: string;
}

const CitiesSelect: FC<ICitiesSelectProps> = (props) => {
  const { control, name, placeholder, ...rest } = props;
  const [cities, setCities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const { data: cities } = await getCities();
      setCities(cities);
      setIsLoading(false);
    })();
  }, []);

  const citiesList = cities?.map((item: any) => {
    return {
      label: item.name,
      value: item.name,
    };
  });

  return (
    <div
      className="bg-white rounded-md p-6 mt-10 md:mx-auto md:w-1/2"
      {...rest}
    >
      <p className="text-sm px-1 font-medium pb-1 text-primary">
        En que zona buscas?
      </p>
      {isLoading ? (
        <Skeleton className="h-10 w-full bg-gray-200 rounded-md" />
      ) : (
        <ControllerSelect
          id="city"
          placeholder={placeholder}
          options={citiesList}
          control={control}
          name={name}
        />
      )}
    </div>
  );
};

export default CitiesSelect;
