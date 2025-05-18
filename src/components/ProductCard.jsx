// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import { ShoppingCart, HeartPlus } from 'lucide-react'; // Icons used in the card

const ProductCard = ({ product }) => {
  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);
  const originalPrice = product.price.toFixed(2);
  const status = product.status?.toUpperCase();

  return (
    <div className="bg-[#f8f9fa] w-full relative group overflow-hidden">
      {/* Image and Status Badge Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-full aspect-[3/4] object-cover" // Added aspect ratio and object-cover for consistent image sizes
        />
        {status && (
          <span
            className={`absolute top-2 right-2 text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 rounded ${
              status === 'SALE'
                ? 'bg-blue-500'
                : status === 'HOT'
                ? 'bg-orange-500'
                : 'bg-green-500' // Default or other status color
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Default info shown when not hovering */}
      <div className="p-3 sm:p-4 text-left bg-white group-hover:hidden">
        <h3
          className="text-base sm:text-lg font-bold text-black mb-1.5 sm:mb-2 truncate"
          title={product.name} // Good for accessibility and long names
        >
          {product.name}
        </h3>
        <div className="flex items-baseline space-x-1.5 mt-1">
          {product.discount > 0 && (
            <span className="text-gray-500 line-through text-sm sm:text-base">
              $ {originalPrice}
            </span>
          )}
          <span className="text-black font-semibold text-base sm:text-lg">
            $ {discountedPrice}
          </span>
        </div>
      </div>

      {/* Info shown on hover - replaces default info */}
      {/* The animate classes require animate.css to be set up in your project */}
      <div className="animate__fadeInUp animate__animated hidden group-hover:flex justify-between items-center p-3 sm:p-4 bg-white absolute bottom-0 left-0 right-0">
        <button 
          className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart size={20} sm:size={24} /> {/* Responsive icon size */}
          <span className='font-bold text-sm sm:text-base'>Add To Cart</span>
        </button>
        <button 
          className='text-orange-500 hover:text-orange-600 transition-colors'
          aria-label={`Add ${product.name} to wishlist`}
        >
          <HeartPlus size={20} sm:size={24} /> {/* Responsive icon size */}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;