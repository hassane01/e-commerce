// src/components/Wishlist/Wishlist.jsx
import React from 'react';
import { X } from 'lucide-react'; // Using X from lucide-react for a cleaner look like the image
import { useSelector, useDispatch } from 'react-redux';
import { selectWishlistItems, removeItemFromWishlist } from '../features/wishlist/wishlistSlice'; // ADJUST PATH
import { addItem as addItemToCart } from '../features/cart/cartslice'; // ADJUST PATH & aliased

const Wishlist = () => {
  const wishlistItems = useSelector(selectWishlistItems); // Correctly select all wishlist items
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeItemFromWishlist(itemId));
  };

  const handleAddToCart = (item) => {
    // Construct the payload expected by your cart's addItem action
    const itemForCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      // quantity: 1, // Assuming cart's addItem handles default quantity or you pass it
    };
    dispatch(addItemToCart(itemForCart));
    // Optional: remove from wishlist after adding to cart
    // dispatch(removeItemFromWishlist(item.id));
  };

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>
          <p className="text-gray-600">Your wishlist is currently empty.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center md:text-left">My Wishlist</h1>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                <th scope="col" className="px-4 py-3 w-2/5"> {/* Adjusted width */}
                  Product Name
                </th>
                <th scope="col" className="px-4 py-3 w-1/5 text-center"> {/* Adjusted width */}
                  Unit Price
                </th>
                <th scope="col" className="px-4 py-3 w-1/5 text-center"> {/* Adjusted width */}
                  Availability
                </th>
                <th scope="col" className="px-4 py-3 w-1/5 text-center"> {/* Action column */}
                  Action
                </th>
                <th scope="col" className="px-2 py-3 w-[5%] text-center"> {/* Remove column */}
                  {/* Empty header for the remove button column */}
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id} className="bg-white border-b hover:bg-gray-50 align-middle">
                  {/* Product Name (Image + Text) */}
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image || 'https://via.placeholder.com/60'} // Fallback image
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded bg-gray-100 p-1"
                      />
                      <span className="font-medium text-gray-900">{item.name || 'Product Name'}</span>
                    </div>
                  </td>

                  {/* Unit Price */}
                  <td className="px-4 py-4 text-center">
                    ${(item.price || 0).toFixed(2)}
                  </td>

                  {/* Availability */}
                  <td className="px-4 py-4 text-center">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.availability === "IN STOCK"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.availability || 'N/A'}
                    </span>
                  </td>

                  {/* Add to Cart Button */}
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={item.availability !== "IN STOCK"}
                      className="bg-gray-900 text-white text-xs font-semibold py-2 px-4 rounded hover:bg-gray-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      ADD TO CART
                    </button>
                  </td>

                  {/* Remove Button */}
                  <td className="px-2 py-4 text-center">
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <X size={20} strokeWidth={2.5} /> {/* Adjusted strokeWidth for visibility */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;