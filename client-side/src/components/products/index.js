import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Container, Grid } from "@mui/material"
import SingleProduct from './SingleProduct';
import SingleProductDT from './SingleProductDT';
import { useSelector, useDispatch } from 'react-redux';
import useProductsData from '../../hooks/useProductsData';
import Slider from '../slider';


const Products = () => {
  useProductsData();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const products = useSelector(state => state.products.value.products);



  const renderProducts = products?.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4} 
          sx={{ pt: '20px' }}
          display="flex" 
          flexDirection={"column"} 
          alignItems="center">
      {matches ? (
      <SingleProduct product={product} matches={matches} />
      ) : (
      <SingleProductDT product={product} matches={matches} />
      )}
    </Grid>

  ))
  return (
<Grid container component="main" columns={16}>
  <Slider />
  <Grid container  
  spacing={{ xs: 2, md: 4}}
  justifyContent="center"
  sx={{margin: '20px 4px 10px 4px', pt: '20px' }}
  columns={{xs: 4, s: 8, md:12}}
  >
    {renderProducts}
  </Grid>
</Grid>
  )
}

export default Products
