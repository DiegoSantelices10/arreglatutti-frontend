import { AvatarImage, Avatar as AvatarUI } from '@/components/ui/avatar';
import { cn } from '@/utils';
import React, { FC, HTMLAttributes } from 'react';

interface IAvatarProps {
  image: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}
const Avatar: FC<IAvatarProps> = (props) => {
  const { image, className } = props;

  return (
    <AvatarUI className={cn('bg-white', className)}>
      <AvatarImage
        src={image}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </AvatarUI>
  );
};

export default Avatar;
