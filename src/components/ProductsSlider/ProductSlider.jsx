import { ChevronLeft, ChevronRight } from 'lucide-react'; // Keep slider controls icons here
import React, { useState, useEffect } from 'react';
import productsData from '../../assets/productslist';
import ProductCard from '../../components/ProductCard'; // Adjust path if ProductCard is in a different folder

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

function useItemsPerPage() {
  const [items, setItems] = useState(3); // Default items

  useEffect(() => {
    function updateItems() {
      const w = window.innerWidth;
      if (w < breakpoints.sm) setItems(1);
      else if (w < breakpoints.md) setItems(2);
      else if (w < breakpoints.lg) setItems(3);
      else setItems(4); // For xl and above
    }
    updateItems(); // Initial call
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  return items;
}

const ProductSlider = () => {
  const products = productsData;
  const itemsPerPage = useItemsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure maxIndex is never negative and considers all items can be shown
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));

  return (
    <section className="w-full py-8 relative px-4 sm:px-8 bg-white">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-opacity"
        aria-label="Previous products"
      >
        <ChevronLeft size={20} strokeWidth={3} />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentIndex >= maxIndex && products.length > itemsPerPage} // Disable only if there are more items than can be shown
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-opacity"
        aria-label="Next products"
      >
        <ChevronRight size={20} strokeWidth={3} />
      </button>

      {/* Slider Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            // Calculate translation based on current index and items per page
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            // Set the width of the sliding container to accommodate all items if needed for some transform calculations,
            // or manage through flex basis of children.
            // width: `${(products.length / itemsPerPage) * 100}%` // This might be an alternative way to structure the slide
          }}
        >
          {products.map(product => (
            <div
              key={product.id || product.name} // Prefer a unique ID if available
              className="px-1 sm:px-2 shrink-0" // Added shrink-0
              style={{ flexBasis: `${100 / itemsPerPage}%` }} // Use flexBasis
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;