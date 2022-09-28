import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../../styles/Products'

const ProductMeta = ({ product, matches }) => {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? 'h5' : 'h4'} lineHeight={2}>
        {product.brand_name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'}>
        ${product.price}
      </Typography>
    </ProductMetaWrapper>
  )
}

export default ProductMeta