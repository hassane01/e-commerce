import React from 'react'

const SkeletonProductCard = () => ( 
    <div className="border rounded-lg p-4 shadow bg-white animate-pulse">
      <div className="w-full h-48 bg-gray-300 mb-4 rounded"></div>
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-1 w-full"></div>
      <div className="h-4 bg-gray-300 rounded mb-3 w-5/6"></div>
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  );
  

export default SkeletonProductCard