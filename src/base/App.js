import React from "react";

import { Button, Container, Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import { CartProvider } from "../context/cart";

import styles from "./style.module.scss";
import { Stack } from "@mui/system";
import MiniCart from "../components/MiniCart";

const App = () => {
  return (
    <CartProvider>
      <div className={styles.topBar}>
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <h1>90s Shop</h1>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={3}>
                <Button component={Link} to={"/"}>
                  products
                </Button>
                <Button component={Link} to={"/cart"}>
                  cart
                </Button>
                <MiniCart />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Container>
    </CartProvider>
  );
};

export default App;
