/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { cn } from '@/utils';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

type ControllerInputFileProps = {
  name: string;
  control: any;
  className?: string;
  errorMessage?: string;
  htmlForLabel?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const ControllerInputFilePDF: FC<ControllerInputFileProps> = ({
  name,
  control,
  className,
  errorMessage,
  htmlForLabel,
  children,
  ...rest
}) => {
  const renderControllerInputFile = ({ field }: any) => {
    const { onChange } = field;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (!file) {
        console.warn('No se ha seleccionado ningún archivo.');
        return;
      }

      if (file.type !== 'application/pdf') {
        console.warn('Solo se permiten archivos PDF.');
        return;
      }

      const pdfData = {
        fileName: file.name,
        file,
        type: file.type,
      };

      onChange(pdfData);
    };

    return (
      <div className="grid gap-1">
        <div className={cn(className)}>
          <label htmlFor={htmlForLabel}>
            {children ? (
              children
            ) : (
              <div className="px-2 text-gray-500 cursor-pointer text-center border border-gray-200 py-2 font-medium rounded-md text-[14px]">
                <span>Seleccionar archivo PDF</span>
              </div>
            )}
          </label>
          <Input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
            {...rest}
          />
        </div>
        {errorMessage && (
          <p className="leading-3 text-red-400 text-center text-[12px]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      render={renderControllerInputFile}
    />
  );
};

export default ControllerInputFilePDF;
