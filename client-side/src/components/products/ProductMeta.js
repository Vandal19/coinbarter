import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../../styles/products'
import { useSelector } from "react-redux";

const ProductMeta = ({ id, matches }) => {
  const { items, status } = useSelector(state => state.products )

  const product = items.find((value) => value.id === id)

  return (
    <>
    <ProductMetaWrapper  >
      <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
        {product.brand_name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'}>
        ${product.price.toFixed(2)}
      </Typography>
    </ProductMetaWrapper>
    </>
  )
}

export default ProductMeta
