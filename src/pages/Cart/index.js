import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

import useCartContext from "../../context/cart";
import { formatToCurrency } from "../../utils";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const SHIPPING_FEE = 30;

const Cart = () => {
  const [{ items }, { addItem, removeItem }] = useCartContext();
  const [cartValues, setCartValues] = useState({
    subTotal: 0,
    total: 0,
  });

  const quantityChange = ({ target }, id) => {
    addItem({ id }, target.value);
  };

  useEffect(() => {
    var result = items.reduce(function (acc, obj) {
      return acc + obj.quantity * obj.price;
    }, 0);

    setCartValues({
      subTotal: result,
      total: result + SHIPPING_FEE,
    });
  }, [items]);

  return (
    <Box sx={{ maxWidth: 700, margin: "40px auto" }}>
      <Typography variant="h3" gutterBottom>
        Cart
      </Typography>

      {items.length === 0 ? (
        <Box>
          <Typography
            paragraph
            variant="h6"
            textAlign="center"
            sx={{ marginTop: "100px" }}
          >
            Your cart is empty
          </Typography>
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Qty.</TableCell>
                <TableCell align="right">Sum</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="center">
                    {formatToCurrency(item.price)}
                  </TableCell>
                  <TableCell align="center">
                    <Select
                      labelId="cart-select-quantity"
                      id="cart-select-quantity"
                      value={item.quantity}
                      onChange={(e) => quantityChange(e, item.id)}
                      size="small"
                      sx={{ minWidth: 65 }}
                    >
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
                  </TableCell>
                  <TableCell align="right">
                    {formatToCurrency(item.price * item.quantity)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="secondary"
                      aria-label="remove product"
                      onClick={() => removeItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell align="center">Subtotal</TableCell>
                <TableCell colSpan={2} align="right">
                  {formatToCurrency(cartValues.subTotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Tax</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="right">
                  {formatToCurrency(SHIPPING_FEE)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Total</TableCell>
                <TableCell colSpan={2} align="right">
                  {cartValues.total}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Cart;
