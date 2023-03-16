import React from 'react';
import {
  Routes, Route
} from 'react-router-dom';
import "./App.css"
import About from '../src/components/About';
import Cart from '../src/components/Cart';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import Navbar from '../src/components/Navbar';
import Product from '../src/components/Product';
import Products from '../src/components/Products';
import Contact from '../src/components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

