'use client';
import Button from '@/components/custom/Button';
import ControllerInput from '@/components/custom/ControllerInput';
import SendIcon from '@/images/icons/send-icon';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const CreateQueryForm: FC = () => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="flex items-end justify-between gap-2 w-full">
      <div className="w-full">
        <ControllerInput
          control={control}
          className="w-full bg-[#FAFAFB]"
          name="message"
          placeholder="Escribe tu mensaje"
        />
      </div>
      <Button onClick={handleSubmit(onSubmit)} className="w-auto">
        <SendIcon className="text-white" />
      </Button>
    </div>
  );
};

export default CreateQueryForm;
