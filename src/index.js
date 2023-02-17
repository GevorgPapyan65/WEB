import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Home' element={<Home />}/>
      <Route path='/REGISTER' element={<Register />}/>
      <Route path='/SIGN IN' element={<Login />}/>
      <Route path='/Product' element={<Product />}/>
      <Route path='/ProductList' element={<ProductList />}/>
      <Route path='/Cart' element={<Cart />}/>
    </Routes>
  </BrowserRouter>
);
