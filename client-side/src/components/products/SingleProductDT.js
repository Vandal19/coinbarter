import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductAddToCart,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleProductDT = ({ product, matches }) => {
  const [showOpt, setShowOpt] = useState(false);

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
          <ProductAddToCart show={showOpt} variant="outlined">
            Add to Cart
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
