import React, { useState, useEffect, useRef } from 'react';
import { Search, CircleUser, ShoppingBasket, X } from 'lucide-react'; // Added X for close icon
import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch
import { useNavigate } from 'react-router-dom';
import { TbShoppingBagHeart } from 'react-icons/tb';
// Import actions if you want to remove/update items directly from dropdown
// import { removeItem, updateItemQuantity } from '../../features/cart/cartSlice'; // ADJUST PATH

const RightSidenav = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalCartPrice = useSelector((state) => state.cart.totalPrice); // Get total price

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const cartDropdownRef = useRef(null); // Ref for the dropdown
  const cartIconRef = useRef(null); // Ref for the cart icon

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCartDropdownOpen &&
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target) &&
        cartIconRef.current &&
        !cartIconRef.current.contains(event.target)
      ) {
        setIsCartDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartDropdownOpen]);

  // Example handlers for actions within the dropdown (optional)
  // const handleRemoveItemFromDropdown = (cartItemId) => {
  //   dispatch(removeItem(cartItemId)); // Assuming removeItem action exists and takes cartItemId
  // };

  return (
    <div className='flex justify-end items-center md:space-x-9 text-sm font-semibold md:flex-grow'>
      <Search className='cursor-pointer' size='28px' strokeWidth='1.5px' />
      <div className='hidden lg:flex items-center space-x-3 cursor-pointer' > {/* Updated route for clarity */}
        <CircleUser color='black' size='28px' strokeWidth='1.5px' />
        <span>ACCOUNT</span> {/* You might want to change this to "WISHLIST" or have a separate icon */}
      </div>
      <div className='hidden lg:flex items-center space-x-3 cursor-pointer' onClick={() => navigate('/wishlist')}> {/* Updated route for clarity */}
        <TbShoppingBagHeart color='black' size='28px' strokeWidth='1.5px' />
      </div>

      {/* Shopping Basket Icon and Dropdown */}
      <div className='relative' ref={cartIconRef}>
        <div className='flex relative cursor-pointer' onClick={toggleCartDropdown}>
          <ShoppingBasket size='28px' strokeWidth='1.5px' />
          {totalCartQuantity > 0 && (
            <span className='absolute -top-1 -right-2 bg-red-600 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full'> {/* Changed bg for better visibility */}
              {totalCartQuantity}
            </span>
          )}
        </div>

        {/* Cart Dropdown */}
        {isCartDropdownOpen && (
          <div
            ref={cartDropdownRef}
            className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-md shadow-xl z-50 border border-gray-200"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside dropdown from closing it via handleClickOutside
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-semibold text-gray-700">Shopping Cart</h3>
                <button onClick={toggleCartDropdown} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-4">Your cart is empty.</p>
              ) : (
                <div className="max-h-64 overflow-y-auto pr-1 space-y-3"> {/* Scrollable items list */}
                  {cartItems.map((item) => (
                    <div key={item.cartItemId} className="flex items-start space-x-3 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                      <img
                        src={item.image || 'https://via.placeholder.com/50'} // Fallback image
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded border border-gray-200"
                      />
                      <div className="flex-1 min-w-0"> {/* Added min-w-0 for proper truncation */}
                        <p className="text-sm font-medium text-gray-800 truncate" title={item.name}>{item.name}</p>
                        {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                        {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                        {/* Optional: Remove item button
                        <button
                          onClick={() => handleRemoveItemFromDropdown(item.cartItemId)}
                          className="text-xs text-red-500 hover:text-red-700 mt-1"
                        >
                          Remove
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">Subtotal:</span>
                  <span className="text-lg font-semibold text-gray-900">${totalCartPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    navigate('/cart');
                    setIsCartDropdownOpen(false);
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 mb-2 transition-colors"
                >
                  View Cart
                </button>
                <button
                  onClick={() => {
                    navigate('/checkout');
                    setIsCartDropdownOpen(false);
                  }}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidenav;