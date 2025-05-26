import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes , Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
function App() {


  return (
    <container className="App px-10 ">
     <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/shop" element={<Shop/>}> </Route>
        <Route path='/item/:id' element={<ProductPage/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>

    
    </container>)

}

export default App;
