import { ChevronLeft, ChevronRight, ShoppingCart, HeartPlus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import productsData from '../../assets/productslist';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

function useItemsPerPage() {
  const [items, setItems] = useState(3);

  useEffect(() => {
    function updateItems() {
      const w = window.innerWidth;
      if (w < breakpoints.sm) setItems(1);
      else if (w < breakpoints.md) setItems(2);
      else if (w < breakpoints.lg) setItems(3);
      else setItems(4);
    }
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  return items;
}

const ProductSlider = () => {
  const products = productsData;
  const itemsPerPage = useItemsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const handleNext = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));

  return (
    <section className="w-full py-8 relative px-4 sm:px-8 bg-white">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute top-1/2 -translate-y-1/2 left-2 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
        aria-label="Previous products"
      >
        <ChevronLeft size={20} strokeWidth={3} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        className="absolute top-1/2 -translate-y-1/2 right-2 z-20 bg-black text-white p-2 rounded-full hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
        aria-label="Next products"
      >
        <ChevronRight size={20} strokeWidth={3} />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map(product => {
            const discountedPrice = product.discount
              ? (product.price * (1 - product.discount / 100)).toFixed(2)
              : product.price.toFixed(2);
            const originalPrice = product.price.toFixed(2);
            const status = product.status?.toUpperCase();

            return (
              <div
                key={product.name}
                className="px-1 sm:px-2"
                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              >
                <div className="bg-[#f8f9fa] w-full relative group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-full"
                    />
                    {status && (
                      <span
                        className={`absolute top-2 right-2 text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 rounded ${
                          status === 'SALE'
                            ? 'bg-blue-500'
                            : status === 'HOT'
                            ? 'bg-orange-500'
                            : 'bg-green-500'
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
                      title={product.name}
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
                  {/* Replace info on hover */}
                  <div className=" animate__fadeInUp animate__animated  hidden group-hover:flex justify-between items-center p-3 sm:p-4 bg-white">
                    <div className="flex items-center space-x-2 text-topButton">
                      <ShoppingCart  size={30} className='' />
                      <li className='list-none font-bold '>Add To Cart</li>
                    </div>
                    <HeartPlus className='text-topButton '  size={30} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
