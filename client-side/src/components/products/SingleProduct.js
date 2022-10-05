import { Stack } from '@mui/material'
import React from 'react'
import { Product, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart, ProductActionButton } from "../../styles/products"
import ProductMeta from './ProductMeta'
import FavoriteIcon from '@mui/icons-material/Favorite'
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../productdetail'
import FitScreenIcon from '@mui/icons-material/FitScreen';
import ShareIcon from '@mui/icons-material/Share';


const SingleProduct = ({product, matches}) => {

  const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

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
          <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
          <ProductActionButton onClick={() => showProductDetailDialog()}>
            <FitScreenIcon color='primary' />
          </ProductActionButton>
        </Stack>
      </ProductActionsWrapper>
    </Product>
    <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    <ProductDetailDialog product={product} />
    </>
  )
}

export default SingleProduct