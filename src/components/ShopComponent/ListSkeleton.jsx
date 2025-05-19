import React from 'react'

const ListSkeleton = () => ( 
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-start border rounded-lg p-4 shadow-sm bg-white animate-pulse">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 mr-4 rounded flex-shrink-0"></div>
          <div className="flex-grow">
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-1 w-full"></div>
            <div className="h-4 bg-gray-300 rounded mb-3 w-5/6"></div>
            <div className="h-10 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );

export default ListSkeleton