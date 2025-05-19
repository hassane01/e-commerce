import React from 'react'

const ProductListCard = React.memo( ({displayedProducts }) => {
  return (
    <div className="space-y-4">
          {displayedProducts.map((product, index) => {
            const discountedPrice = product.discount
              ? (product.price * (1 - product.discount / 100)).toFixed(2)
              : product.price.toFixed(2);
            const originalPrice = product.price.toFixed(2);

            return (
              <div 
                key={product.id || `product-list-${index}`} 
                className="flex flex-col sm:flex-row p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-200"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full sm:w-40 h-48 sm:h-auto object-cover mr-0 sm:mr-6 mb-4 sm:mb-0 rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-3">
                    {product.description || "No description available."} 
                  </p>
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-xl font-bold text-blue-600">${discountedPrice}</span>
                    {product.discount > 0 && (
                      <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
  )
})

export default ProductListCard