// components/navbar/SearchBarComp.jsx
import React, { useState, useEffect, useRef } from 'react';
import productslist from '../../assets/productslist'; // Ensure this path is correct
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBarComp = ({ isSearchOpen, searchQuery, setSearchQuery, closeSearch }) => {
  const [filteredProductList, setFilteredProductList] = useState([]);
  const searchInputRef = useRef(null);       // Ref for the input element
  const searchContainerRef = useRef(null); // Ref for the main content box of the search modal

  const navigate = useNavigate();

  // Effect 1: Focus the input field when the search modal opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Effect 2: Filter the product list whenever the searchQuery prop changes
  useEffect(() => {
    // Guard against searchQuery being undefined or not a string
    const currentQuery = typeof searchQuery === 'string' ? searchQuery : '';
    const lowercasedQuery = currentQuery.toLowerCase().trim();

    if (lowercasedQuery === '') {
      setFilteredProductList([]); // Clear results if query is empty
    } else {
      const filtered = productslist.filter((product) =>
        product.name && typeof product.name === 'string' && // Ensure product.name exists and is a string
        product.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProductList(filtered);
    }
  }, [searchQuery]); // Re-run this effect when searchQuery (from props) changes

  // Effect 3: Handle clicks outside the search content box to close the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the modal is open and the click is outside the searchContainerRef
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        closeSearch(); // Call the closeSearch function passed from parent
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Clean up the event listener if the modal is not open
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove the event listener when the component unmounts or dependencies change
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen, closeSearch]); // Dependencies for this effect

  // Handler for when a product in the search results is clicked
  const handleProductClick = (product) => {
    navigate(`/item/${product.id}`); // Navigate to the product detail page
    closeSearch();                   // Close the search modal
  };

  // Handler for the clear search button (X)
  const handleClearSearch = () => {
    setSearchQuery(''); // Call the setSearchQuery prop to clear the query in the parent state
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Re-focus the input after clearing
    }
  };

  // If the search modal is not supposed to be open, render nothing
  if (!isSearchOpen) {
    return null;
  }

  // Ensure searchQuery is a string for display and trim operations in JSX
  const displaySearchQuery = typeof searchQuery === 'string' ? searchQuery : '';

  return (
    // Outermost div: Full-screen overlay with backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-start pt-16 sm:pt-20 transition-opacity duration-300 ease-in-out"
      // The click-outside-to-close is handled by the useEffect with searchContainerRef to be more precise
    >
      {/* Innermost div: The actual search box content (white panel) */}
      <div
        ref={searchContainerRef} // Attach ref here for click-outside detection
        className="bg-white rounded-lg shadow-2xl w-11/12 max-w-md md:max-w-lg flex flex-col relative transform transition-all duration-300 ease-in-out" // Added transform for potential animation
        // style={{ maxHeight: 'calc(100vh - 8rem)' }} // Alternative max-height
      >
        {/* Search Input Section */}
        <div className="p-3.5 sm:p-4 border-b border-gray-200 relative">
          <input
            ref={searchInputRef}
            type="text"
            value={displaySearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update parent's searchQuery state
            placeholder="Search products..."
            className="w-full p-2.5 pl-3 pr-10 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none"
          />
          {/* Clear Search Button (X) */}
          {displaySearchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 transform p-1 text-gray-400 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {/* Search Results Section */}
        {/* Conditionally render results area only if there's a search query */}
        {displaySearchQuery.trim() !== '' && (
          <div className="overflow-y-auto max-h-[55vh] sm:max-h-[60vh] py-2 px-1">
            {filteredProductList.length > 0 ? (
              <ul className="divide-y divide-gray-100">
                {filteredProductList.map((product) => (
                  <li
                    key={product.id || product.name} // Prefer product.id if available and unique
                    className="flex items-center p-2.5 sm:p-3 hover:bg-gray-100 rounded-md cursor-pointer transition-colors duration-150"
                    onClick={() => handleProductClick(product)}
                  >
                    <img
                      src={product.image || 'https://via.placeholder.com/40'} // Fallback image
                      alt={product.name || 'Product'}
                      className="w-10 h-10 object-cover mr-3 rounded-sm flex-shrink-0 border border-gray-200"
                    />
                    <div className="min-w-0 flex-1"> {/* For proper truncation */}
                      <h4 className="font-medium text-sm text-gray-800 truncate" title={product.name}>
                        {product.name || 'Unnamed Product'}
                      </h4>
                      <p className="text-xs text-gray-500">
                        ${product.price && typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              // This message shows when query is typed but no products match
              <p className="text-center text-gray-500 py-4 px-3 text-sm">
                No products found matching "{displaySearchQuery}".
              </p>
            )}
          </div>
        )}
        {/* Message when search query is empty (after being typed into and then cleared, or initially) */}
        {displaySearchQuery.trim() === '' && (
            <p className="text-center text-gray-400 py-8 px-3 text-sm">
              Start typing to discover products.
            </p>
        )}
      </div>
    </div>
  );
};

export default SearchBarComp;