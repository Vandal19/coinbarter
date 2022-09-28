import { Stack } from '@mui/material'
import React from 'react'
import { Product, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart } from "../../styles/Products"
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'

const SingleProductDT = ({product, matches}) => {


  return (
    <>
    <Product>
      <ProductImage src={product.cover_image_url} />
      <ProductFavButton isFav={0}>
          <FavoriteIcon />
      </ProductFavButton>
      <ProductMeta product={product} matches={matches} />
      <ProductActionsWrapper>
        <Stack direction="row">

        </Stack>
      </ProductActionsWrapper>
    </Product>
    </>
  )
}

export default SingleProductDT