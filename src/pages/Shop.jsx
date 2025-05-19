import React, { useState, useMemo, Suspense, lazy } from 'react';
import productsData from '../assets/productslist'; // Make sure this path is correct
import LoadingSpinner from '../components/LoadingSpinner';
import GridSkeleton from '../components/ShopComponent/GridSkeleton';
import ListSkeleton from '../components/ShopComponent/ListSkeleton';
import NoProductsToShow from '../components/ShopComponent/NoProductsToShow';
const ProductCard = lazy(() => import('../components/ProductCard'));
const ProductListCard = lazy(() => import('../components/ShopComponent/ProductListCard'));
const TopNavBar = lazy(() => import('../components/ShopComponent/TopNavBar'));
const allCategories = ['ALL', 'SMARTPHONES', 'COMPUTERS', 'CAMERAS', 'ON SALE', 'OTHERS'];
const Shop = () => {
  const [activeCategory, setActiveCategoryState] = useState('ALL');
  const [viewMode, setViewModeState] = useState('grid');
  const [sortOption, setSortOptionState] = useState('low-to-high');

  const displayedProducts = useMemo(() => {
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
      return !isNaN(price) ? price : Infinity; // Handle potential NaN price
    };
    if (sortOption === 'low-to-high') {
      tempProducts.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortOption === 'high-to-low') {
      tempProducts.sort((a, b) => getPrice(b) - getPrice(a));
    }


    return tempProducts;
  }, [activeCategory, sortOption]);

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


      <Suspense fallback={viewMode === 'grid' ? <GridSkeleton /> : <ListSkeleton />}>
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
            {displayedProducts.map((product) => (

              <ProductCard product={product} key={product.id || product.name} />
            ))}
          </div>
        ) : (
          <ProductListCard displayedProducts={displayedProducts} />
        )}
      </Suspense>

      <NoProductsToShow displayedProducts={displayedProducts}/>
    </section>
  );
};

export default Shop;