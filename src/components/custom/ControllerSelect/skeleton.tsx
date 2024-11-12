import { HTMLAttributes } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const ControllerSelectSkeleton = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <Skeleton
    className="h-8 w-full rounded-md"
    {...rest}
  />
);

export default ControllerSelectSkeleton;
