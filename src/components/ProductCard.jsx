// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// 1. Corrected import path and aliased addItem from cartSlice
import { addItem as addItemToCart } from '../features/cart/cartslice'; // ADJUST PATH if needed, ensure 'cartSlice.js' is the filename
import { toggleWishlistItem, selectIsItemInWishlist } from '../features/wishlist/wishlistSlice'; // ADJUST PATH if needed

const ProductCard = React.memo(({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // For debugging, you can keep this, but it's not strictly necessary for functionality
  // const itemswishlist = useSelector(selectWishlistItems);
  // console.log('Current Wishlist Items:', itemswishlist);

  // Check if the current product is in the wishlist
  const isItemInWishlist = useSelector(selectIsItemInWishlist(product.id));

  const currentPrice = product?.price || 0;
  const discount = product?.discount || 0;

  const discountedPrice = discount > 0
    ? (currentPrice * (1 - discount / 100))
    : currentPrice;
  const originalPrice = currentPrice;
  const status = product?.status?.toUpperCase();

  const handleAddToCart = (e) => {
    e.stopPropagation();

    // 2. Construct the payload in the structure expected by cartSlice's addItem reducer
    const productDetailsForCart = {
      id: product.id,
      name: product.name,
      price: parseFloat(discountedPrice.toFixed(2)),
      image: product.image,
      // color and size are typically not selected on the product card,
      // so pass them as null or undefined if your generateCartItemId in cartSlice handles it.
      // If generateCartItemId doesn't use them when they are null/undefined, that's fine too.
      color: null, // Or undefined
      size: null,  // Or undefined
    };

    dispatch(addItemToCart({ // 3. Dispatch with the correct structure
      productDetails: productDetailsForCart,
      quantity: 1 // Default quantity from a product card is usually 1
    }));
    console.log("Added to cart:", productDetailsForCart, "Quantity: 1");
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();

    const productForWishlist = {
      id: product.id,
      name: product.name,
      price: parseFloat(discountedPrice.toFixed(2)),
      image: product.image,
      // Include any other fields your wishlist might display or use (e.g., status, category)
      // availability: product.status === 'IN STOCK' ? 'IN STOCK' : 'OUT OF STOCK', // Example if needed
    };

    dispatch(toggleWishlistItem(productForWishlist));
    // The console log below is correct as isItemInWishlist will update after the dispatch and re-render
    // but the message might feel "one step behind" if logged immediately.
    // For more accurate immediate feedback, you might need to derive the next state,
    // or just rely on the UI update.
    // console.log(`${isItemInWishlist ? 'Attempting to remove from' : 'Attempting to add to'} wishlist:`, productForWishlist.name);
  };


  // Defensive check for product prop
  if (!product || typeof product.id === 'undefined') {
    console.warn("ProductCard received invalid product prop:", product);
    return null; // Or a placeholder UI
  }

  return (
    <div className="bg-[#f8f9fa] w-full relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"> {/* Added subtle rounding and shadow */}
      <div className="relative overflow-hidden cursor-pointer rounded-t-lg" onClick={() => navigate(`/item/${product.id}`, { state: product })}>
        <img
          src={product.image || 'https://via.placeholder.com/300x400'} // Fallback image
          alt={product.name || 'Product Image'}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105 w-full aspect-[3/4] object-cover"
        />
        {status && (
          <span
            className={`absolute top-2.5 right-2.5 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 rounded-full shadow-sm ${ // Adjusted padding and size for badge
              status === 'SALE'
                ? 'bg-blue-500'
                : status === 'HOT'
                ? 'bg-red-500' // Using red for hot for more visual punch
                : 'bg-green-500'
            }`}
          >
            {status}
          </span>
        )}
      </div>

      <div className="p-2.5 sm:p-3 text-left bg-white group-hover:hidden rounded-b-lg"> {/* Slightly reduced padding */}
        <h3
          className="text-sm sm:text-base font-semibold text-gray-800 mb-1 truncate" // Adjusted font and margin
          title={product.name}
        >
          {product.name || 'Product Name'}
        </h3>
        <div className="flex items-baseline space-x-1"> {/* Reduced space */}
          {discount > 0 && (
            <span className="text-gray-500 line-through text-xs sm:text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-gray-900 font-bold text-base sm:text-lg">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="animate__fadeInUp animate__animated hidden group-hover:flex justify-between items-center p-2.5 sm:p-3 bg-white absolute bottom-0 left-0 right-0 border-t border-gray-100 rounded-b-lg">
        <button
          className="flex items-center space-x-1.5 sm:space-x-2 text-orange-500 hover:text-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-400 rounded p-1 sm:p-1.5 transition-colors" // Added focus ring and adjusted padding
          aria-label={`Add ${product.name} to cart`}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} sm:size={20} />
          <span className='font-semibold text-xs sm:text-sm'>Add To Cart</span>
        </button>
        <button
          className={`focus:outline-none focus:ring-1 focus:ring-offset-1 rounded p-1 sm:p-1.5 transition-colors ${ // Added focus ring and adjusted padding
            isItemInWishlist ? 'text-red-500 hover:text-red-600 focus:ring-red-400' : 'text-orange-500 hover:text-orange-600 focus:ring-orange-400'
          }`}
          aria-label={`${isItemInWishlist ? 'Remove' : 'Add'} ${product.name} ${isItemInWishlist ? 'from' : 'to'} wishlist`}
          onClick={handleToggleWishlist}
        >
          <Heart size={18} sm:size={20} fill={isItemInWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
});

export default ProductCard;