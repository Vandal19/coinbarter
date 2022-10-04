import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../features/cartSlice';



const SingleProductDT = ({ product, matches }) => {
  const [showOpt, setShowOpt] = useState(false);
  const products = useSelector(state => state.products.value.products);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const { addToCartText } = useCart(product);

  const toggleMouse = (item, action) => {
    if (showOpt === true) {
      console.log("showOpt", showOpt)
      return setShowOpt(false);
    }
    return setShowOpt(true);
  };

  useEffect(() => {
    console.log("items", products)
  }, [products])


  return (
    <>
      <Product onMouseEnter={toggleMouse} onMouseLeave={toggleMouse}>
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        <ProductImage src={product.cover_image_url} />

        {showOpt && (
          <ProductAddToCart onClick={() => handleAddToCart(product)} show={showOpt} variant="contained">
            {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOpt}>
          <Stack direction="column"></Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta id={product.id} matches={matches} />
    </>
  );
};

export default SingleProductDT;
