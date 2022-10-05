import { ImageList, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductAddToCart,
  ProductActionButton,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitScreenIcon from '@mui/icons-material/FitScreen';
import ShareIcon from '@mui/icons-material/Share';
import useCart from "../../hooks/useCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../features/cartSlice';
import { addToFavorite } from "../../features/favoriteSlice";
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../productdetail'



const SingleProductDT = ({ product, matches }) => {
  const [showOpt, setShowOpt] = useState(false);
  const products = useSelector(state => state.products.value.products);

  // hook to open and close product details dialog
  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product))
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
        <ProductFavButton isFav={0} onClick={() => handleAddToFavorite(product)}>
          <FavoriteIcon />
        </ProductFavButton>
        {/* <ImageList > */}
          <ProductImage src={product.cover_image_url} />
        {/* </ImageList> */}

        {showOpt && (
          <ProductAddToCart onClick={() => handleAddToCart(product)} show={showOpt} variant="contained">
            {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOpt}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta id={product.id} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  );
};

export default SingleProductDT;
