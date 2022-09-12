import { CartProvider } from "../context/cart";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// convert to dolar string
export const formatToCurrency = (val) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);

// render Jest inside context
export const renderWithContext = (component) =>
  render(
    <BrowserRouter>
      <CartProvider>{component}</CartProvider>
    </BrowserRouter>
  );
