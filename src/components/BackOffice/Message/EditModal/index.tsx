/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from '@/components/custom/Modal';
import EmailIcon from '@/images/icons/email-icon';
import React, { FC } from 'react';
import TelephoneIcon from '../../../../../public/images/telephone-icon';

interface IEditModalProps {
  item: any;
}

const EditModal: FC<IEditModalProps> = (props) => {
  const { item } = props;
  return (
    <Modal
      title="Mensaje"
      triggerButton={
        <div className="cursor-pointer bg-secondary flex justify-center items-center rounded-full h-8 w-8">
          {<EmailIcon className="text-white h-5 w-5" />}
        </div>
      }
      childrenFooter={
        <div className="w-full flex justify-end items-center gap-1 text-primary">
          <TelephoneIcon className="text-primary size-4" />
          <p className="text-sm font-semibold">{item.telephone}</p>
        </div>
      }
    >
      <div className="space-y-2">
        <h2 className=" text-primary font-semibold">{item.name}</h2>
        <div className="px-3 py-4 rounded-md bg-white border border-slate-200">
          <p className="text-sm text-textSecondary">{item.message}</p>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
