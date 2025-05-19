import React from 'react'
import SkeletonProductCard from './SkeletonProductCard';

const GridSkeleton = () => (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
      {[...Array(8)].map((_, i) => <SkeletonProductCard key={i} />)}
    </div>
  );

export default GridSkeleton