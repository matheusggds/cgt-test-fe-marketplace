import React, { useEffect, useState } from "react";

import axios from "axios";
import { Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard";
import Loading from "./Loading";
import Error from "../../components/Error";

const STATUS = {
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
};

const Home = () => {
  const [products, setProducts] = useState();
  const [status, setStatus] = useState(STATUS.LOADING);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");

        console.log("########", data);

        setProducts(data.products);
        setStatus(STATUS.SUCCESS);
      } catch (e) {
        setStatus(STATUS.ERROR);
      }
    };

    getProducts();
  }, []);

  if (status === STATUS.LOADING) {
    return <Loading />;
  }

  if (status === STATUS.ERROR) {
    return <Error />;
  }

  return (
    <Grid container spacing={2}>
      {products.map((el, idx) => (
        <Grid item key={idx} md={3} sm={4} xs={6}>
          <ProductCard data={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
