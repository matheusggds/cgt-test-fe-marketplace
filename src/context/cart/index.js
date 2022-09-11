import React, { useContext } from "react";

const CartContext = React.createContext();

const CART_STATE = {
  items: [],
};

const useCartContext = function () {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be inside a Cartcontext.Provider");
  }

  return context;
};

export const CartProvider = ({ children }) => (
  <CartContext.Provider value={CART_STATE}>{children}</CartContext.Provider>
);

export default useCartContext;
