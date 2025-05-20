import React from "react";
import { Accessibility } from "lucide-react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { Routes , Route } from "react-router-dom";

import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
function App() {


  return (
    <container className="App px-10 ">
     <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/shop" element={<Shop/>}> </Route>
        <Route path='/item/:id' element={<ProductPage/>}></Route>
      </Routes>

    
    </container>)

}

export default App;
