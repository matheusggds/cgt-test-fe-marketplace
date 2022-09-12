import React, { useContext, useState } from "react";

const CartContext = React.createContext();

const CART_STATE = {
  items: [],
};

const useCartContext = function () {
  const context = useContext(CartContext);

  return context;
};

export const CartProvider = ({ children, defaultState }) => {
  const [state, setState] = useState(defaultState || CART_STATE);

  const addItem = (item, quantityToAdd, excatQuantity, successCallback) => {
    const newItems = [...state.items];
    const indexItem = newItems.findIndex((val) => item.id === val.id);

    // handle quantity at cart
    if (indexItem > -1) {
      // check if product already exist
      let item = newItems[indexItem];

      if (excatQuantity) {
        item.quantity = excatQuantity;
      } else {
        item.quantity += quantityToAdd;
      }
    } else {
      newItems.push({
        ...item,
        quantity: quantityToAdd,
      });
    }

    setState({
      ...state,
      items: newItems,
    });

    successCallback && successCallback();
  };

  const removeItem = (id) => {
    const newItems = state.items.filter((el) => el.id !== id);

    setState({
      ...state,
      items: newItems,
    });
  };

  return (
    <CartContext.Provider value={[state, { addItem, removeItem }]}>
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
