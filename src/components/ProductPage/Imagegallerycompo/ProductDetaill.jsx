import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaShare, FaShoppingCart } from 'react-icons/fa';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { TbHeartPlus, TbHeartFilled } from 'react-icons/tb'; // Added TbHeartFilled for filled state
import { useDispatch, useSelector } from 'react-redux';       // 1. useSelector imported
import { addItem as addItemToCart } from '../../../features/cart/cartslice';       // 2. Aliased cart's addItem (ADJUST PATH)
import { toggleWishlistItem, selectIsItemInWishlist } from '../../../features/wishlist/wishlistSlice'; // 3. Imported wishlist actions/selector (ADJUST PATH)

const ProductDetaill = ({
  productInfo,
  renderStars,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
  handleQuantityChange,
  quantity
}) => {
  const dispatch = useDispatch();
  
  // 4. Check if the current product is in the wishlist
  // Ensure productInfo.id exists before calling the selector
  const isItemInWishlist = useSelector(
    (state) => productInfo && productInfo.id ? selectIsItemInWishlist(productInfo.id)(state) : false
  );

  const currentPrice = productInfo?.price || 0;
  const discount = productInfo?.discount || 0;

  const discountedPrice = discount > 0
    ? (currentPrice * (1 - discount / 100))
    : currentPrice;

  const handleAddToCartClick = () => {
    if (productInfo.availableColors && productInfo.availableColors.length > 0 && !selectedColor) {
      alert('Please select a color.'); return;
    }
    if (productInfo.availableSizes && productInfo.availableSizes.length > 0 && !selectedSize) {
      alert('Please select a size.'); return;
    }
    if (quantity <= 0) {
      alert('Quantity must be at least 1.'); return;
    }

    const productDetailsForCart = {
      id: productInfo.id,
      name: productInfo.name,
      price: parseFloat(discountedPrice.toFixed(2)),
      image: productInfo.images?.[0] || productInfo.image,
      color: selectedColor || null,
      size: selectedSize || null,
    };

    dispatch(addItemToCart({ // Changed addItem to addItemToCart for clarity
      productDetails: productDetailsForCart,
      quantity: quantity
    }));
    console.log(`${quantity} x ${productDetailsForCart.name} (Color: ${selectedColor}, Size: ${selectedSize}) added to cart.`);
  };

  // 5. Handler for toggling wishlist item
  const handleToggleWishlist = () => {
    if (!productInfo || !productInfo.id) {
      console.error("Product information is incomplete for wishlist action.");
      return;
    }
    const productForWishlist = {
      id: productInfo.id,
      name: productInfo.name,
      price: parseFloat(discountedPrice.toFixed(2)),
      image: productInfo.images?.[0] || productInfo.image,
      // You might want to include selectedColor and selectedSize if you want the *specific variant* in the wishlist
      // For now, let's assume we add the base product or a default representation.
      // Or, if your `toggleWishlistItem` in the slice doesn't care about variants and just uses `id`:
      // color: selectedColor || null,
      // size: selectedSize || null,
      // Also, add availability if your wishlist page displays it
      availability: productInfo.status === 'IN STOCK' ? 'IN STOCK' : 'OUT OF STOCK', // Example
    };
    dispatch(toggleWishlistItem(productForWishlist));
  };


  // Defensive check for productInfo prop
  if (!productInfo || typeof productInfo.id === 'undefined') {
    console.warn("ProductDetaill received invalid productInfo prop:", productInfo);
    return <div>Product details are not available.</div>; // Or a more sophisticated loading/error state
  }

  return (
    <div className="lg:w-1/2 mt-8 lg:mt-0">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{productInfo.name}</h1>

      <div className="flex items-center mb-4">
        <div className="flex">
          {productInfo.averageRating ? renderStars(productInfo.averageRating) : renderStars(0)}
        </div>
        {typeof productInfo.reviewCount === 'number' && ( // Check if reviewCount is a number
          <a href="#reviews" className="ml-2 text-sm text-gray-600 hover:underline">
            ({productInfo.reviewCount}) customer reviews
          </a>
        )}
      </div>
      {/* Displaying discounted price consistently */}
      <p className="text-3xl font-semibold text-blue-600 mb-4">${discountedPrice.toFixed(2)}</p>

      <p className="text-gray-700 mb-6">{productInfo.description}</p>

      {/* Color Selection */}
      {productInfo.availableColors && productInfo.availableColors.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">COLOR</h3>
          <div className="flex space-x-2">
            {productInfo.availableColors.map(color => (
              <button
                key={color.name}
                title={color.name}
                aria-label={`Select color ${color.name}`}
                className={`w-8 h-8 rounded-full border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500
                  ${selectedColor === color.name ? 'ring-2 ring-offset-1 ring-blue-500 scale-110' : 'border-gray-300 hover:border-gray-400'}
                  ${color.class || ''}`} // Use color.class if provided
                style={!color.class && color.hex ? { backgroundColor: color.hex } : !color.class ? { backgroundColor: color.name.toLowerCase() } : {}} // Apply inline style for hex or name if no class
                onClick={() => setSelectedColor(color.name)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {productInfo.availableSizes && productInfo.availableSizes.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">SIZE</h3>
          <div className="flex flex-wrap gap-2">
            {productInfo.availableSizes.map(size => (
              <button
                key={size}
                className={`px-3 py-1.5 border rounded-md text-sm font-medium focus:outline-none transition-colors
                  ${selectedSize === size
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4 mb-6">
        {/* Quantity Controls */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-l-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrease quantity">
            <MdOutlineArrowBackIos size={16} />
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border-l border-r border-gray-300 focus:outline-none py-1.5 bg-white"
            aria-label="Current quantity" />
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-r-md focus:outline-none"
            aria-label="Increase quantity">
            <MdOutlineArrowForwardIos size={16} />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCartClick}
          className="flex-grow bg-gray-900 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gray-800 transition duration-150 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
          <FaShoppingCart size={18} />
          <span>ADD TO CART</span>
        </button>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist} // 6. Attach handler
          className={`p-2.5 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors ${
            isItemInWishlist ? 'text-red-500 hover:text-red-600 focus:ring-red-500' : 'text-gray-700 hover:text-red-500 focus:ring-gray-400'
          }`}
          aria-label={isItemInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isItemInWishlist ? <TbHeartFilled size={20} /> : <TbHeartPlus size={20} />} {/* 7. Conditional Icon */}
        </button>

        {/* Share Button (Placeholder) */}
        <button className="p-2.5 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none">
          <FaShare size={20} />
        </button>
      </div>

      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-600">Share:</span>
        <a href="#" className="text-gray-500 hover:text-blue-600"><FaFacebook size={20} /></a>
        <a href="#" className="text-gray-500 hover:text-sky-500"><BsTwitter size={20} /></a>
      </div>
    </div>
  );
};

export default ProductDetaill;