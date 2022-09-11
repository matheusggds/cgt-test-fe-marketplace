import React from 'react'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

import { Routes, Route, Link } from "react-router-dom";

import styles from './style.module.scss'
import CartContext from '../context/cartContext';



const App = () =>{
  return (
    <div>
      <div>
        side bar
      </div>
      <CartContext.Provider>
        <div className={styles.contentWrapper}>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Cart">Cart</Link>
          </div>
          <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Product" element={<Product />} />
                <Route path="Cart" element={<Cart />} />
              </Routes>
          </div>
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default App;
