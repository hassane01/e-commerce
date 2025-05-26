// src/pages/Cart.jsx (or wherever you place it)
import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react'; // Using lucide-react icons
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalCartPrice,
  removeItem, // Make sure this action expects cartItemId
  incrementItemQuantity, // Make sure this action expects cartItemId
  decrementItemQuantity, // Make sure this action expects cartItemId
  clearCart
} from '../features/cart/cartslice'; // ADJUST PATH

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectTotalCartPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState('');
  // You'd typically have a grandTotal in your Redux state if coupons/shipping affect it
  // For now, grandTotal will be the same as subTotal.
  const grandTotal = subTotal; // Add discount logic later if needed

  const handleRemoveItem = (cartItemId) => {
    dispatch(removeItem(cartItemId));
  };

  const handleIncrementQuantity = (cartItemId) => {
    dispatch(incrementItemQuantity(cartItemId));
  };

  const handleDecrementQuantity = (cartItemId) => {
    dispatch(decrementItemQuantity(cartItemId));
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your shopping cart?")) {
        dispatch(clearCart());
    }
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    // TODO: Implement coupon logic (likely involves dispatching an action)
    console.log("Applying coupon:", couponCode);
    alert(`Coupon "${couponCode}" applied (feature not fully implemented).`);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="py-12 px-4 md:px-8 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Your Shopping Cart</h1>
          <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
          <button
            onClick={() => navigate('/shop')} // Navigate to your main shop page
            className="bg-gray-800 text-white font-semibold py-3 px-8 rounded hover:bg-gray-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-gray-800 text-center md:text-left">Shopping Cart</h1>

        {/* Cart Items Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
          <table className="w-full min-w-[700px] text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-200">
              <tr>
                <th scope="col" className="px-4 py-3.5 w-[40%] font-semibold">Product Name</th>
                <th scope="col" className="px-4 py-3.5 w-[15%] text-center font-semibold">Unit Price</th>
                <th scope="col" className="px-4 py-3.5 w-[15%] text-center font-semibold">Quantity</th>
                <th scope="col" className="px-4 py-3.5 w-[15%] text-center font-semibold">Total</th>
                <th scope="col" className="px-2 py-3.5 w-[5%] text-center font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.cartItemId} className="border-b border-gray-200 hover:bg-gray-50 align-middle">
                  {/* Product Info */}
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image || 'https://via.placeholder.com/80'}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded bg-gray-100 p-1 border border-gray-200"
                      />
                      <div>
                        <span className="block font-medium text-gray-900">{item.name || 'Product Name'}</span>
                        {item.color && <span className="text-xs text-gray-500 block">Color: {item.color}</span>}
                        {item.size && <span className="text-xs text-gray-500 block">Size: {item.size}</span>}
                      </div>
                    </div>
                  </td>
                  {/* Unit Price */}
                  <td className="px-4 py-4 text-center font-medium text-gray-800">
                    ${(item.price || 0).toFixed(2)}
                  </td>
                  {/* Quantity */}
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center border border-gray-300 rounded w-fit mx-auto">
                      <button
                        onClick={() => handleDecrementQuantity(item.cartItemId)}
                        disabled={item.quantity <= 1}
                        className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-l"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1.5 w-10 text-center font-medium bg-white border-l border-r border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrementQuantity(item.cartItemId)}
                        className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-200 rounded-r"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  {/* Total Price for Item */}
                  <td className="px-4 py-4 text-center font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  {/* Remove Button */}
                  <td className="px-2 py-4 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.cartItemId)}
                      className="p-2 text-gray-400 hover:text-red-600 bg-gray-100 hover:bg-red-100 rounded-full transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={18} strokeWidth={2.5}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
            <div>
                <button
                    onClick={handleClearCart}
                    className="text-sm text-gray-600 border border-gray-300 font-medium py-2.5 px-5 rounded hover:bg-gray-100 transition-colors mr-3"
                >
                    CLEAR SHOPPING CART
                </button>
                {/* "Update Shopping Cart" is often implicit with +/- buttons that dispatch.
                    If you need a specific "update all" button, that would require different logic. */}
                {/* <button
                    className="text-sm text-gray-600 border border-gray-300 font-medium py-2.5 px-5 rounded hover:bg-gray-100 transition-colors"
                >
                    UPDATE SHOPPING CART
                </button> */}
            </div>
            <button
                onClick={() => navigate('/shop')} // Navigate to your main shop page
                className="bg-gray-800 text-white font-semibold py-2.5 px-6 rounded hover:bg-gray-700 transition-colors text-sm"
            >
                CONTINUE SHOPPING
            </button>
        </div>

        {/* Coupon and Cart Totals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coupon Discount */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Coupon discount</h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your code if you have one. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <form onSubmit={handleApplyCoupon} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="ENTER YOUR CODE HERE"
                className="flex-grow px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white font-semibold py-2.5 px-6 rounded-md hover:bg-gray-700 transition-colors text-sm"
              >
                APPLY COUPON
              </button>
            </form>
          </div>

          {/* Cart Totals */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Cart Totals</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-gray-700">
                <span>SUB TOTAL</span>
                <span className="font-medium">${subTotal.toFixed(2)}</span>
              </div>
              {/* Add Shipping and Discount lines here when implemented */}
              {/* <div className="flex justify-between text-sm text-gray-700">
                <span>SHIPPING</span>
                <span className="font-medium">$0.00</span>
              </div> */}
              <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                <span>GRAND TOTAL</span>
                <span className="text-blue-600">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors text-sm"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;