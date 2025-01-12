import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ProfessionSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-y-8 mx-auto w-full">
      <div className="flex justify-center">
        <div className="space-y-2">
          <Skeleton className="w-[48px] h-[48px] rounded bg-gray-100" />
          <Skeleton className="w-[48px] h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="space-y-2">
          <Skeleton className="w-[48px] h-[48px] rounded bg-gray-100" />
          <Skeleton className="w-[48px] h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="space-y-2">
          <Skeleton className="w-[48px] h-[48px] rounded bg-gray-100" />
          <Skeleton className="w-[48px] h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="space-y-2">
          <Skeleton className="w-[48px] h-[48px] rounded bg-gray-100" />
          <Skeleton className="w-[48px] h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="space-y-2">
          <Skeleton className="w-[48px] h-[48px] rounded bg-gray-100" />
          <Skeleton className="w-[48px] h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="space-y-2">
          <Skeleton className="w-[48px] h-[48px] rounded bg-gray-100" />
          <Skeleton className="w-[48px] h-4 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default ProfessionSkeleton;
