import React from 'react'

const LoadingSpinner = () => (
    <div className="text-center py-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
      <p className="mt-2 text-gray-500">Loading...</p>
    </div>
  );
  

export default LoadingSpinner