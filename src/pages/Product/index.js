import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { formatToCurrency } from "../../utils";

import { Stack } from "@mui/system";
import SelectQuantity from "../../components/SelectQuantity";
import useCartContext from "../../context/cart";
import Error from "../../components/Error";
import Loading from "./Loading";

const STATUS = {
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
  ADDED_TO_CART: "added_to_cart",
};

const Home = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [status, setStatus] = useState(STATUS.LOADING);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [, { addItem }] = useCartContext();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/" + id
        );

        setProductData(data);
        setStatus(STATUS.SUCCESS);
      } catch (e) {
        setStatus(STATUS.ERROR);
      }
    };

    getProducts();
  }, [id]);

  const AddToCart = () => {
    addItem(productData, quantityToAdd, null, () => {
      setStatus(STATUS.ADDED_TO_CART);

      setTimeout(() => {
        setStatus(STATUS.SUCCESS);
      }, 3000);
    });
  };

  if (status === STATUS.LOADING) {
    return <Loading />;
  }

  if (status === STATUS.ERROR) {
    return <Error />;
  }

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {productData.title}
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Box mb={3}>
            <img
              src={productData.images[0]}
              title={productData.title}
              alt={productData.title}
            />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <div>
            <Stack direction="row" spacing={1} marginBottom={3}>
              <Chip
                label={productData.brand}
                variant="outlined"
                color="primary"
              />
              <Chip
                label={productData.category}
                variant="outlined"
                color="primary"
              />
            </Stack>
          </div>
          <div>
            <Typography paragraph>{productData.description}</Typography>
          </div>
          <Typography variant="h4">
            {formatToCurrency(productData.price)}
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <Stack direction="row" spacing={3}>
              <SelectQuantity
                elId={id}
                quantity={quantityToAdd}
                getValueChanged={(value) => setQuantityToAdd(value)}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => AddToCart()}
              >
                add to cart
              </Button>
            </Stack>
          </Box>
          <Box sx={{ mt: 3 }}>
            {status === STATUS.ADDED_TO_CART && (
              <Alert severity="success">Added to cart</Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
