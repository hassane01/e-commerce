import React from 'react'

const ImagesContainer = ({productInfo , selectedImage ,setSelectedImage }) => {
  return (
    <div className="lg:w-1/2 flex flex-col-reverse md:flex-row md:space-x-4">
    <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 mt-4 md:mt-0 items-center md:items-start">
      {productInfo.images && productInfo.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${productInfo.name} thumbnail ${index + 1}`}
          className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImage === img ? 'border-blue-500' : 'border-transparent'} hover:border-blue-300`}
          onClick={() => setSelectedImage(img)}
        />
      ))}
    </div>
    <div className="flex-1">
      <img 
        src={selectedImage} 
        alt={productInfo.name} 
        className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md" 
      />
    </div>
  </div>
  )
}

export default ImagesContainer