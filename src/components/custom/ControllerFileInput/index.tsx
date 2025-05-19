/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { cn, resizeImage } from '@/utils';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { ControllerInputFileProps } from './types';

const ControllerInputFile: FC<ControllerInputFileProps> = ({
  name,
  control,
  className,
  errorMessage,
  htmlForLabel,
  children,
  multiple,
  ...rest
}) => {
  const renderControllerInputFile = ({ field }: any) => {
    const { onChange, value } = field;

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFiles = Array.from(e.target.files);

        const processedImages = await Promise.all(
          selectedFiles.map(async (file) => {
            const fileName = file.name;

            // Evitar archivos duplicados
            if (
              multiple &&
              value?.some?.(
                (img: { fileName: string }) => img.fileName === fileName
              )
            ) {
              return null;
            }

            const resizedImage = await resizeImage(file, 800, 800, 0.7);

            return {
              fileName,
              url: resizedImage,
            };
          })
        );

        const validImages = processedImages.filter(Boolean); // Quita los null

        if (multiple) {
          onChange([...(value || []), ...validImages]);
        } else {
          onChange(validImages[0] || null);
        }
      } else {
        console.warn('No se ha seleccionado ningún archivo.');
      }
    };

    return (
      <div className="grid gap-1">
        <div className={cn(className)}>
          <label htmlFor={htmlForLabel}>
            {children ? (
              children
            ) : (
              <div className="px-2 text-gray-500 cursor-pointer text-center border border-gray-200 py-2 font-medium rounded-md text-[14px]">
                <span>Seleccionar archivo</span>
              </div>
            )}
          </label>
          <Input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="hidden"
            onChange={handleFileChange}
            multiple={multiple}
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

export default ControllerInputFile;
