import React from 'react'

const NoProductsToShow = ({displayedProducts}) => {
    {displayedProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500 mt-8">
          <p className="text-2xl font-semibold">No products found.</p>
          <p className="mt-2">Try adjusting your filters or check back later!</p>
        </div>
      )}
}

export default NoProductsToShow