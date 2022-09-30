import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductAddToCart,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useCart from "../../hooks/useCart";


const SingleProductDT = ({ product, matches }) => {
  const [showOpt, setShowOpt] = useState(false);

  const { addToCart, addToCartText } = useCart(product);

  const toggleMouse = (item, action) => {
    if (showOpt === true) {
      console.log("showOpt", showOpt)
      return setShowOpt(false);
    }
    return setShowOpt(true);
  };

  return (
    <>
      <Product onMouseEnter={toggleMouse} onMouseLeave={toggleMouse}>
        <ProductImage src={product.cover_image_url} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOpt && (
          <ProductAddToCart onClick={addToCart} show={showOpt} variant="contained">
            {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOpt}>
          <Stack direction="column"></Stack>
        </ProductActionsWrapper>
      </Product>
        <ProductMeta product={product} matches={matches} />
    </>
  );
};

export default SingleProductDT;
