import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navbar/Navigation";
import Cart from "./components/Cart/cart";
import { GlobalProvider } from "./components/GlobalContext/GlobalContext";

function App() {
  return (
        <GlobalProvider>
          
          <Router>
          <Navigation/>
          {/* <Slideshow/> */}
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='cart' element={<Cart />}></Route>
              </Routes>
          </Router>  
        </GlobalProvider>
          
         
        
     
  );
} 
export default App;
