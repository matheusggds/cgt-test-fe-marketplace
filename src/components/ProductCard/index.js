import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";

import style from "./style.module.scss";

const ProductCard = ({ data, addToCart }) => {
  const { price, thumbnail, description, title, id } = data;

  return (
    <Card className={style.ProductCard}>
      <CardMedia component="img" height="140" image={thumbnail} alt={title} />
      <CardContent className={style.ProductContent}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart()}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
