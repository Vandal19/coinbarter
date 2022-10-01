import { Stack } from '@mui/material'
import React from 'react'
import { Product, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart } from "../../styles/products"
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'


const SingleProduct = ({product, matches}) => {

  return (
    <>
    <Product >
      <ProductImage src={product.cover_image_url} />
      <ProductMeta id={product.id} product={product} matches={matches} />
      <ProductActionsWrapper>
        <Stack direction="row">
          <ProductFavButton isFav={0}>
            <FavoriteIcon />
          </ProductFavButton>
        </Stack>
      </ProductActionsWrapper>
    </Product>
    <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  )
}

export default SingleProduct