import React from 'react';
import {
  Routes, Route
} from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
    </>
  );
};

export default App;

