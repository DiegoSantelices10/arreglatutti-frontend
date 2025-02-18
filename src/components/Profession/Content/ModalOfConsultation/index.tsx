/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/custom/Button';
import ControllerTextArea from '@/components/custom/ControllerTextArea';
import Modal from '@/components/custom/Modal';
import React, { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface IModalOfConsultationProps {
  professional: any;
  userId: string;
}

const ModalOfConsultation: FC<IModalOfConsultationProps> = (props) => {
  const {
    professional: { _id, email },
    userId,
  } = props;

  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      description: '',
    },
  });

  const onSubmit = (value: FieldValues) => {
    const newQuery = {
      professionalId: _id,
      clienteId: userId,
      description: value.description,
    };
    console.log('newQuery', newQuery);
    console.log('email', email);
  };

  return (
    <Modal
      triggerButton={<Button>Dejame tu consulta</Button>}
      title="Envio de consulta"
      childrenFooter={<Button onClick={handleSubmit(onSubmit)}>Enviar</Button>}
    >
      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-xs font-medium text-primary"
        >
          Descripción
        </label>
        <ControllerTextArea
          id="description"
          control={control}
          placeholder="Ingrese una descripción del inconveniente a solucionar"
          name="description"
        />
      </div>
    </Modal>
  );
};

export default ModalOfConsultation;
