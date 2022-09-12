import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import React, { useState } from "react";

import style from "./style.module.scss";
import { formatToCurrency } from "../../utils";
import useCartContext from "../../context/cart";

const ProductCard = ({ data }) => {
  const { price, thumbnail, description, title, id } = data;
  const [, actions] = useCartContext();
  const [isSuccess, setIsSuccess] = useState(false);

  const setSuccess = () => {
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <Card className={style.ProductCard}>
      <CardActionArea
        sx={{ height: "100%" }}
        component={Link}
        to={"/product/" + id}
      >
        <CardMedia component="img" height="140" image={thumbnail} alt={title} />
        <CardContent className={style.ProductContent}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography sx={{ mt: 3, align: "center" }}>
            Price: <b>{formatToCurrency(price)}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      {isSuccess && <Alert severity="success">Added to cart</Alert>}
      <CardActions>
        <Button
          onClick={() => actions.addItem(data, 1, null, setSuccess)}
          size="small"
          color="primary"
          variant="outlined"
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
