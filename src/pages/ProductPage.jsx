// src/components/ProductPage.js
import React, { useMemo, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import productslist from '../assets/productslist'; 

import { Star } from 'lucide-react'; 
import ImageGallery from '../components/ProductPage/ImageGallery';
import DescripionSection from '../components/ProductPage/DescripionSection';

const ProductPage = () => {
  const { state: routeState } = useLocation();
  const { id } = useParams();

  const productInfo = useMemo(() => {
    return routeState || productslist.find(p => String(p.id) === id);
  }, [routeState, id]);

  // State for the top section (ProductDisplayArea)
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // ---- CRUCIAL FOR DescripionSection ----
  const [activeTab, setActiveTab] = useState('description'); // Initialize activeTab
  // ---- END CRUCIAL ----

  useEffect(() => {
    if (productInfo) {
      setSelectedImage(productInfo.image || (productInfo.images && productInfo.images[0]));
      if (productInfo.availableColors && productInfo.availableColors.length > 0) {
        setSelectedColor(productInfo.availableColors[0].name);
      }
      if (productInfo.availableSizes && Array.isArray(productInfo.availableSizes) && productInfo.availableSizes.length > 0) {
        setSelectedSize(productInfo.availableSizes[0]);
      }
    }
  }, [productInfo]);

  
  if (!productInfo) {
    return <div className="container mx-auto p-8 text-center">Product not found.</div>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const renderStars = (rating) => {
    
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }
    if (halfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-200" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />);
    }
    return stars;
  };

  const displayAreaProps = {
    productInfo,
    selectedImage,
    setSelectedImage,
    renderStars,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    quantity,
    handleQuantityChange,
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <ImageGallery {...displayAreaProps} />

        {/* Using your DescripionSection component */}
        <DescripionSection
          activeTab={activeTab}           
          setActiveTab={setActiveTab}     
          productInfo={productInfo}       
        />
      </div>
    </section>
  );
};

export default ProductPage;