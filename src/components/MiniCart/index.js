import React, { useEffect, useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import useCartContext from "../../context/cart";

const MiniCart = () => {
  const [{ items }] = useCartContext();
  const [itemLength, setItemsLength] = useState(items.length);

  useEffect(() => {
    console.log(items);

    let totalItems = items.reduce(function (acc, obj) {
      return acc + obj.quantity;
    }, 0);

    setItemsLength(totalItems);
  }, [items]);

  return (
    <Badge
      sx={{ display: "flex", alignItems: "center" }}
      color="primary"
      badgeContent={itemLength}
      showZero
    >
      <ShoppingCartIcon />
    </Badge>
  );
};

export default MiniCart;
