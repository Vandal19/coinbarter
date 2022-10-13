import React from 'react'
import { Card, CardMedia, CardActionArea, Grid }from '@mui/material';

const BitPay = () => {
  return (
    <>
    <Grid container spacing={0}>

      <Grid item >
        <Card sx={{ display: 'flex', position: 'relative'}}>
          <CardActionArea 
            href="https://test.bitpay.com/invoice?v=3&id=5frg6d2NHgbcXSTsma2bGZ&lang=en-US" 
            rel="noopener noreferrer"
            target="_blank">
            <CardMedia
              component="img"
              sx={{ width: "215px", height: "90px", mx: 1, my: 1, borderRadius: 1}}
              image="https://test.bitpay.com/cdn/en_US/bp-btn-pay-currencies.svg"
              alt="BitPay, the easy way to pay with bitcoins."
            />
          </CardActionArea>
        </Card>
      </Grid>
      
    </Grid>
    </>
  )
}

export default BitPay
