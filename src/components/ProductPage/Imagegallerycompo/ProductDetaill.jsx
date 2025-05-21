import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaShare, FaShoppingCart } from 'react-icons/fa'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { TbHeartPlus } from 'react-icons/tb'

const ProductDetaill = ({productInfo , renderStars , selectedColor , selectedSize , setSelectedColor , setSelectedSize, handleQuantityChange  , quantity  }) => {
  return (
    <div className="lg:w-1/2 mt-8 lg:mt-0">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">{productInfo.name}</h1>
    
    <div className="flex items-center mb-4">
      <div className="flex">
        {productInfo.averageRating ? renderStars(productInfo.averageRating) : renderStars(0)}
      </div>
      {productInfo.reviewCount && (
        <a href="#reviews" className="ml-2 text-sm text-gray-600 hover:underline">
          {productInfo.reviewCount} customer reviews
        </a>
      )}
    </div>

    <p className="text-3xl font-semibold text-blue-600 mb-4">${productInfo.price.toFixed(2)}</p>
    
    <p className="text-gray-700 mb-6">{productInfo.description}</p>

    {productInfo.availableColors && productInfo.availableColors.length > 0 && (
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">COLOR</h3>
        <div className="flex space-x-2">
          {productInfo.availableColors.map(color => (
            <button
              key={color.name}
              title={color.name}
              className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? 'ring-2 ring-offset-1 ring-blue-500' : 'border-gray-200'} ${color.class} focus:outline-none`}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </div>
    )}

    {productInfo.availableSizes && productInfo.availableSizes.length > 0 && (
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">SIZE</h3>
        <div className="flex space-x-2">
          {productInfo.availableSizes.map(size => (
            <button
              key={size}
              className={`px-3 py-1.5 border rounded-md text-sm font-medium focus:outline-none
                ${selectedSize === size 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    )}

    <div className="flex items-center space-x-4 mb-6">
      <div className="flex items-center border border-gray-300 rounded-md">
        <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-l-md focus:outline-none">
          <MdOutlineArrowBackIos size={16} />
        </button>
        <input 
          type="number" 
          value={quantity} 
          readOnly 
          className="w-12 text-center border-l border-r border-gray-300 focus:outline-none py-1.5" 
        />
        <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-r-md focus:outline-none">
          <MdOutlineArrowForwardIos size={16} />
        </button>
      </div>
      <button className="flex-grow bg-gray-900 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gray-800 transition duration-150 flex items-center justify-center space-x-2">
        <FaShoppingCart size={18} />
        <span>ADD TO CART</span>
      </button>
      <button className="p-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 hover:text-red-500 focus:outline-none">
        <TbHeartPlus size={20} />
      </button>
       <button className="p-2.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none"> {/* Simulating the circle X button from image */}
        <FaShare size={20} />
      </button>
    </div>
    
    <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Share:</span>
        <a href="#" className="text-gray-500 hover:text-blue-600"><FaFacebook size={20}/></a>
        <a href="#" className="text-gray-500 hover:text-sky-500"><BsTwitter size={20}/></a>
    </div>

  </div>
  )
}

export default ProductDetaill