import React from 'react';
import './App.css';
import Home from './Components/Home'
import Cart from './Components/Cart/Cart'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
