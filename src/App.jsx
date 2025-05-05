import React from "react";
import { Accessibility } from "lucide-react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter ,Routes , Route } from "react-router-dom";

function App() {

  return (
    <container className="App px-10 ">
     <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
    
    </container>)

}

export default App;
