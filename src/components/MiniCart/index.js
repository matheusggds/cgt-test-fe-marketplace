import React, { useEffect } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import useCartContext from "../../context/cart";

const MiniCart = () => {
  const [state] = useCartContext();

  return (
    <Badge
      sx={{ display: "flex", alignItems: "center" }}
      color="primary"
      badgeContent={state.items.length}
      showZero
    >
      <ShoppingCartIcon />
    </Badge>
  );
};

export default MiniCart;
