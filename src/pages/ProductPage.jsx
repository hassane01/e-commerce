import React, { useMemo, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import productslist from '../assets/productslist';
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { TbHeartPlus } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const ProductPage = () => {
  const { state: routeState } = useLocation();
  const { id } = useParams();

  const productInfo = useMemo(() => {
    return routeState || productslist.find(p => String(p.id) === id);
  }, [routeState, id]);

  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (productInfo) {
      setSelectedImage(productInfo.image);
      if (productInfo.availableColors && productInfo.availableColors.length > 0) {
        setSelectedColor(productInfo.availableColors[0].name);
      }
      if (productInfo.availableSizes && productInfo.availableSizes.length > 0) {
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
      stars.push(<CiStar key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }
    if (halfStar) {
      // Lucide doesn't have a direct half-star, using full for simplicity or you can use a custom SVG
      stars.push(<CiStar key="half" className="w-4 h-4 text-yellow-400 fill-yellow-200" />); 
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<CiStar key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />);
    }
    return stars;
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Image Gallery and Product Details */}
        <div className="lg:flex lg:space-x-8">
          {/* Image Gallery */}
          <div className="lg:w-1/2 flex flex-col-reverse md:flex-row md:space-x-4">
            <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 mt-4 md:mt-0 items-center md:items-start">
              {productInfo.images && productInfo.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${productInfo.name} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImage === img ? 'border-blue-500' : 'border-transparent'} hover:border-blue-300`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="flex-1">
              <img 
                src={selectedImage} 
                alt={productInfo.name} 
                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md" 
              />
            </div>
          </div>

          {/* Product Details */}
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
        </div>

        {/* Bottom Section: Description, Reviews, Specifications */}
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
      </div>
    </section>
  );
};

export default ProductPage;