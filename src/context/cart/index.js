import React, { useContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
  const [state, setState] = useState(CART_STATE);

  const addItem = (el) => {
    const newItems = [...state.items];
    const indexItem = newItems.findIndex((val) => el.id === val.id);

    // handle quantity at cart
    if (indexItem > -1) {
      // check if product is already exist in the cart
      let item = newItems[indexItem];
      item.quantity += 1;
    } else {
      newItems.push({
        ...el,
        quantity: 1,
      });
    }

    setState({
      ...state,
      items: newItems,
    });
  };

  return (
    <CartContext.Provider value={[state, { addItem }]}>
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
