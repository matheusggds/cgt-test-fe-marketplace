import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { formatToCurrency } from "../../utils";

import style from "./style.module.scss";
import { Stack } from "@mui/system";

const STATUS = {
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
};

const Home = () => {
  const [productData, setProductData] = useState();
  const [status, setStatus] = useState(STATUS.LOADING);
  const { id } = useParams();
  const navigate = useNavigate();

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
  }, []);

  if (status === STATUS.LOADING) {
    return <div>Loading</div>;
    // TODO IMPLEMENT LOADING
  }

  if (status === STATUS.ERROR) {
    // TODO IMPLEMENT ERROR
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
            <image>
              <img src={productData.images[0]} title={productData.title} />
            </image>
          </Box>
          <Button
            onClick={() => navigate(-1)}
            color="info"
            variant="outlined"
            size="small"
          >
            Back to products
          </Button>
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
            <Button color="primary" variant="contained" fullWidth>
              add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
