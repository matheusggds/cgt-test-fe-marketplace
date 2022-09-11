import React from "react";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

import { Routes, Route, Link } from "react-router-dom";

import { CartProvider } from "../context/cart";

import styles from "./style.module.scss";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <CartProvider>
      <div className={styles.contentWrapper}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <h1>90s Shop</h1>
          </Grid>
        </Grid>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Product" element={<Product />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
