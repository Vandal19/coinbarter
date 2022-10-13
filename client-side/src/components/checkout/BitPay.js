import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Grid }from '@mui/material';

const BitPay = () => {
  return (
    <>
    <Grid container spacing={10}>

      <Grid item >
        <CardContent>
          <CardActionArea 
            href="https://www.coinpayments.net/index.php" 
            rel="noopener noreferrer"
            target="_blank">
            <CardMedia
              component="img"
              sx={{ width: "215px", height: "60px", mx: 1, my: 1, borderRadius: 1}}
              image="https://www.coinpayments.net/images/pub/buynow-blue2.png"
              alt="Buy Now with CoinPayments.net"
            />
          </CardActionArea>
        </CardContent>
      </Grid>

      <Grid item >
        <CardContent>
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
        </CardContent>
      </Grid>

    </Grid>
    </>
  )
}

export default BitPay
