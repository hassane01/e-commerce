import React from 'react'

const DescripionSection = ({setActiveTab , activeTab , productInfo  }) => {
  return (
    <div className="mt-16 lg:flex lg:space-x-12">
          <div className="lg:w-2/3">
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-3 px-1 text-sm font-medium focus:outline-none
                    ${activeTab === 'description' 
                      ? 'border-b-2 border-gray-900 text-gray-900' 
                      : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Description
                </button>
                {productInfo.reviewCount !== undefined && (
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-3 px-1 text-sm font-medium focus:outline-none
                      ${activeTab === 'reviews' 
                        ? 'border-b-2 border-gray-900 text-gray-900' 
                        : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Reviews ({productInfo.reviewCount || 0})
                  </button>
                )}
              </nav>
            </div>

            {activeTab === 'description' && (
              <div className="text-gray-700 space-y-4 prose max-w-none">
                {productInfo.longDescription ? (
                    productInfo.longDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))
                ) : (
                    <p>No detailed description available.</p>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div id="reviews" className="text-gray-700">
                {/* Placeholder for reviews content */}
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                {productInfo.reviewCount > 0 ? (
                  <p>Display reviews here...</p>
                ) : (
                  <p>No reviews yet for this product.</p>
                )}
              </div>
            )}
          </div>
          
          {productInfo.specifications && productInfo.specifications.length > 0 && (
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pt-1">Specifications</h3>
              <ul className="space-y-2 text-gray-700">
                {productInfo.specifications.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>{spec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
)
}

export default DescripionSection