import React, { useState, useMemo, useCallback, useEffect, Suspense, lazy } from 'react'; // Added useEffect, useCallback
import productsData from '../assets/productslist';
import LoadingSpinner from '../components/LoadingSpinner';
import GridSkeleton from '../components/ShopComponent/GridSkeleton';
import ListSkeleton from '../components/ShopComponent/ListSkeleton';
import NoProductsToShow from '../components/ShopComponent/NoProductsToShow'; 


const ProductCard = lazy(() => import('../components/ProductCard'));
const ProductListCard = lazy(() => import('../components/ShopComponent/ProductListCard'));
const TopNavBar = lazy(() => import('../components/ShopComponent/TopNavBar'));
const PaginationControls = lazy(() => import('../components/ShopComponent/PaginationControls')); 

const allCategories = ['ALL', 'SMARTPHONES', 'COMPUTERS', 'CAMERAS', 'ON SALE', 'OTHERS'];
const PRODUCTS_PER_PAGE = 8;

const Shop = () => {
  const [activeCategory, setActiveCategoryState] = useState('ALL');
  const [viewMode, setViewModeState] = useState('grid');
  const [sortOption, setSortOptionState] = useState('low-to-high');
  const [currentPage, setCurrentPageState] = useState(1); 

  
  const filteredAndSortedProducts = useMemo(() => {
    
    let tempProducts = [...productsData];
    if (activeCategory !== 'ALL') {
      if (activeCategory === 'ON SALE') {
        tempProducts = tempProducts.filter(product => product.discount && product.discount > 0);
      } else {
        tempProducts = tempProducts.filter(product =>
          product.category && product.category.toUpperCase() === activeCategory
        );
      }
    }
    const getPrice = (p) => {
      const price = parseFloat(p.price);
      const discount = parseFloat(p.discount);
      if (discount && discount > 0 && !isNaN(price) && !isNaN(discount)) {
        return price * (1 - discount / 100);
      }
      return !isNaN(price) ? price : Infinity;
    };
    if (sortOption === 'low-to-high') {
      tempProducts.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortOption === 'high-to-low') {
      tempProducts.sort((a, b) => getPrice(b) - getPrice(a));
    }
    // ... any other sort options
    return tempProducts;
  }, [activeCategory, sortOption]);


  useEffect(() => {
    setCurrentPageState(1);
  }, [activeCategory, sortOption]); 

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);


  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPageState(pageNumber);
    const topNavBarElement = document.querySelector('.bg-white.p-4.sm\\:p-6.rounded-lg.shadow');
    const offset = topNavBarElement ? topNavBarElement.offsetHeight + 20 : 100; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, []); 

  return (
    <section className='container mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen'>
      <Suspense fallback={<LoadingSpinner />}>
        <div className='flex flex-col md:flex-row justify-between mb-8 pb-4 border-b space-x-8 border-gray-200 bg-white p-4 sm:p-6 rounded-lg shadow'>
          <TopNavBar
            viewMode={viewMode}
            setViewMode={setViewModeState}
            sortOption={sortOption}
            setSortOption={setSortOptionState}
            allCategories={allCategories}
            setActiveCategory={setActiveCategoryState}
            activeCategory={activeCategory}
          />
        </div>
      </Suspense>

      {/* Conditional rendering for product display area */}
      {filteredAndSortedProducts.length > 0 ? (
        <>
          <Suspense fallback={viewMode === 'grid' ? <GridSkeleton itemsPerPage={PRODUCTS_PER_PAGE} /> : <ListSkeleton itemsPerPage={PRODUCTS_PER_PAGE} />}>
            {viewMode === 'grid' ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
                {paginatedProducts.map((product) => (
                  <ProductCard product={product} key={product.id || product.name} />
                ))}
              </div>
            ) : (
              <ProductListCard displayedProducts={paginatedProducts} />
            )}
          </Suspense>

          {/* Pagination Controls - only show if there are products and more than one page */}
          {totalPages > 1 && (
            <Suspense fallback={<div className="h-20 flex justify-center items-center"><LoadingSpinner /></div>}> {/* Fallback for pagination loading */}
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Suspense>
          )}
        </>
      ) : (
       
        <NoProductsToShow />
      )}
    </section>
  );
};

export default Shop;