import React, { FC } from 'react';
import { HeaderTitleProps } from './types';

const HeaderTitle: FC<HeaderTitleProps> = (props) => {
  const { title } = props;

  return (
    <div className="w-full space-y-2">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <div className="h-0.5 w-full bg-primary/20" />
    </div>
  );
};

export default HeaderTitle;
