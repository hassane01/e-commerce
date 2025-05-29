// App.jsx
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Account from './pages/Accounts';
import SearchBarComp from "./components/navbar/SearchBarComp";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input's value

  const toggleSearch = () => {
    setIsSearchOpen(prevIsOpen => {
      const nextIsOpen = !prevIsOpen;
      if (!nextIsOpen) { // If we are closing it
        setSearchQuery(''); // Clear the search query
      }
      return nextIsOpen;
    });
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery(''); // Clear the search query when explicitly closing
  };

  return (
   
    <div className="App px-0 sm:px-10"> {/* Changed container to div and adjusted padding */}
      <Navbar toggleSearch={toggleSearch} />

      {/* Conditionally render SearchBarComp and pass ALL necessary props */}
      {/* The SearchBarComp already handles its own conditional rendering based on isSearchOpen,
          but rendering it here based on App's isSearchOpen ensures it's only in the DOM when needed.
          Alternatively, always render it and let its internal check handle visibility.
          For full modal behavior, conditionally rendering in App is cleaner.
      */}
      {isSearchOpen && (
        <SearchBarComp
          isSearchOpen={isSearchOpen}       // To know if it should be visible and for internal logic like focus
          searchQuery={searchQuery}        // The current value of the search input
          setSearchQuery={setSearchQuery}  // The function to UPDATE the searchQuery state in App.jsx
          closeSearch={closeSearch}        // Function to close the search (e.g., on product click or click outside)
        />
      )}

      <main className="pt-16"> {/* Adjust if your Navbar has a different height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/item/:id' element={<ProductPage />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;