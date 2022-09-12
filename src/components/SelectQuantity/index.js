import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import useCartContext from "../../context/cart";

const SelectQuantity = ({ el, quantity, getValueChanged }) => {
  const [_, { addItem }] = useCartContext();
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const handleChange = (val) => {
    setCurrentQuantity(val);
    getValueChanged(val);
  };

  const updateCart = (quantity) => {
    addItem(el, _, quantity);
  };

  return (
    <Select
      labelId="cart-select-quantity"
      id="cart-select-quantity"
      onChange={(e) =>
        getValueChanged
          ? handleChange(e.target.value)
          : updateCart(e.target.value)
      }
      size="small"
      sx={{ minWidth: 65 }}
      defaultValue={0}
      value={quantity ? quantity : currentQuantity}
    >
      <MenuItem value={0}>0</MenuItem>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
      <MenuItem value={10}>10</MenuItem>
    </Select>
  );
};

export default SelectQuantity;
