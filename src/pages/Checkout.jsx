// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectTotalCartPrice, clearCart } from '../features/cart/cartslice'; // ADJUST PATH
// You might need icons for payment methods, e.g., from react-icons
// import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const subTotal = useSelector(selectTotalCartPrice);

  // --- Billing Form State ---
  const [billingDetails, setBillingDetails] = useState({
    country: 'US', // Default to United States (US)
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    apartment: '', // Assuming the blank line under address is for Apt/Suite
    city: '',
    state: 'US', // Default for "Country / States" - might need dynamic options
    zip: '',
    phone: '', // Changed one of the "EMAIL" fields to "Phone" for practicality
    email: '',
    createAccount: false,
    accountPassword: '',
    shipToDifferentAddress: false,
    orderNotes: '',
  });

  // --- Shipping Form State (if shipToDifferentAddress is true) ---
  // const [shippingDetails, setShippingDetails] = useState({ ... }); // Define if needed

  const [paymentMethod, setPaymentMethod] = useState('bankTransfer');

  // Redirect if cart is empty
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty. Redirecting to shop...");
      navigate('/shop'); // Or your main shop page
    }
  }, [cartItems, navigate]);


  const handleBillingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // 1. Validate form data
    // 2. Collect all order data (billing, shipping, cart, payment method)
    const orderData = {
      billing: billingDetails,
      // shipping: billingDetails.shipToDifferentAddress ? shippingDetails : billingDetails,
      items: cartItems,
      subTotal,
      shippingCost, // Defined below
      grandTotal,   // Defined below
      paymentMethod,
      orderNotes: billingDetails.orderNotes,
    };

    console.log("Placing Order:", orderData);
    // TODO: Send orderData to your backend API to process the order

    // 3. On successful order placement:
    alert("Order placed successfully! (This is a demo)");
    dispatch(clearCart()); // Clear the cart
    navigate('/order-confirmation'); // Redirect to an order confirmation page
  };

  const shippingCost = 0; // As per the image
  const grandTotal = subTotal + shippingCost;


  // If cart is empty, this component might not even render due to the useEffect redirect
  if (!cartItems || cartItems.length === 0) {
    return <div className="text-center py-10">Loading or cart is empty...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Billing Info Section (Left Side) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Billing Info</h1>
              <div className="space-y-5">
                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-xs font-medium text-gray-500 uppercase mb-1">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={billingDetails.country}
                    onChange={handleBillingChange}
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option value="US">United States (US)</option>
                    <option value="CA">Canada (CA)</option>
                    {/* Add more countries */}
                  </select>
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-500 uppercase mb-1">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={billingDetails.firstName} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-gray-500 uppercase mb-1">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={billingDetails.lastName} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-xs font-medium text-gray-500 uppercase mb-1">Company Name</label>
                  <input type="text" name="companyName" id="companyName" value={billingDetails.companyName} onChange={handleBillingChange} className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-xs font-medium text-gray-500 uppercase mb-1">Address</label>
                  <input type="text" name="address" id="address" placeholder="Street address" value={billingDetails.address} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 mb-2" />
                  <input type="text" name="apartment" id="apartment" placeholder="Apartment, suite, unit, etc. (optional)" value={billingDetails.apartment} onChange={handleBillingChange} className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                {/* City / Town */}
                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-gray-500 uppercase mb-1">City / Town</label>
                  <input type="text" name="city" id="city" value={billingDetails.city} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>

                {/* Country / States & Postcode / ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="state" className="block text-xs font-medium text-gray-500 uppercase mb-1">Country / States</label>
                    {/* This should ideally be dynamic based on selected country above */}
                    <select id="state" name="state" value={billingDetails.state} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="US">United States (US)</option>
                      <option value="NY">New York</option>
                      <option value="CA_S">California</option>
                      {/* Add more states/provinces */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-xs font-medium text-gray-500 uppercase mb-1">Postcode / ZIP</label>
                    <input type="text" name="zip" id="zip" value={billingDetails.zip} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                {/* Phone & Email - Image showed two "EMAIL" labels, corrected to Phone and Email */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-500 uppercase mb-1">Phone</label>
                    <input type="tel" name="phone" id="phone" value={billingDetails.phone} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase mb-1">Email</label>
                    <input type="email" name="email" id="email" value={billingDetails.email} onChange={handleBillingChange} required className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>


                {/* Create Account */}
                <div className="pt-2">
                  <label className="flex items-center text-sm text-gray-700">
                    <input type="checkbox" name="createAccount" checked={billingDetails.createAccount} onChange={handleBillingChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" />
                    Create an account?
                  </label>
                </div>

                {/* Account Password (Conditional) */}
                {billingDetails.createAccount && (
                  <div>
                    <label htmlFor="accountPassword" className="block text-xs font-medium text-gray-500 uppercase mb-1">Account Password</label>
                    <input type="password" name="accountPassword" id="accountPassword" value={billingDetails.accountPassword} onChange={handleBillingChange} required={billingDetails.createAccount} className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                )}

                {/* Order Note */}
                 <div>
                  <label htmlFor="orderNotes" className="block text-xs font-medium text-gray-500 uppercase mb-1">Order Note</label>
                  <textarea
                    name="orderNotes"
                    id="orderNotes"
                    rows="4"
                    value={billingDetails.orderNotes}
                    onChange={handleBillingChange}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
                  ></textarea>
                </div>


                {/* Ship to different address (Placeholder for now, would reveal more fields) */}
                <div className="pt-2">
                   <label className="flex items-center text-sm text-gray-700">
                    <input type="checkbox" name="shipToDifferentAddress" checked={billingDetails.shipToDifferentAddress} onChange={handleBillingChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" />
                    Ship to another address
                  </label>
                </div>
                {/* {billingDetails.shipToDifferentAddress && ( <div> Shipping address form here... </div> )} */}

              </div>
            </div>

            {/* Your Order Section (Right Side) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md sticky top-8"> {/* Sticky for longer forms */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h2>

                {/* Product List */}
                <div className="space-y-3 mb-6 border-b border-gray-200 pb-4">
                  {cartItems.map(item => (
                    <div key={item.cartItemId} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 w-3/4 truncate" title={`${item.name} x ${item.quantity}`}>
                        {item.name} <span className="text-gray-500"> x {item.quantity}</span>
                        {item.color && <span className="text-xs text-gray-400 block ml-1">Color: {item.color}</span>}
                        {item.size && <span className="text-xs text-gray-400 block ml-1">Size: {item.size}</span>}
                      </span>
                      <span className="text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">${subTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200 mt-2">
                    <span>Total</span>
                    <span className="text-blue-600">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                  <div>
                    <label className="flex items-start p-3 border border-gray-300 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                      <input type="radio" name="paymentMethod" value="bankTransfer" checked={paymentMethod === 'bankTransfer'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1 mr-3" />
                      <div>
                        <span className="font-medium text-sm text-gray-800">Direct bank transfer</span>
                        <p className="text-xs text-gray-500 mt-1">Aenean id ullamcorper libero. Vestibulum impnibh. Lorem vitulum lacinia risus. Etiam sagittis.</p>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-start p-3 border border-gray-300 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                      <input type="radio" name="paymentMethod" value="chequePayment" checked={paymentMethod === 'chequePayment'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1 mr-3" />
                       <div>
                        <span className="font-medium text-sm text-gray-800">Cheque Payment</span>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-start p-3 border border-gray-300 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                      <input type="radio" name="paymentMethod" value="paypal" checked={paymentMethod === 'paypal'} onChange={(e) => setPaymentMethod(e.target.value)} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1 mr-3" />
                      <div>
                        <span className="font-medium text-sm text-gray-800">PayPal</span>
                        {/* Add payment method icons here */}
                        <span className="text-xs text-gray-500 ml-2">(Visa, Mastercard, Amex)</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white font-semibold py-3.5 px-6 rounded-md hover:bg-gray-700 transition-colors text-sm uppercase tracking-wider"
                  >
                    Place Order
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;