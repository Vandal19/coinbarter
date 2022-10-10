// GET PRICE OF ETHER IN USD

import React from 'react'
import { useState, useEffect } from 'react';
import { Grid, Paper, Typography }from '@mui/material';
import axios from 'axios';


const GetEthPrice = () => {

  const [data, setData] = useState(null);

  const geckoURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20litecoin&order=market_cap_desc&per_page=3&page=1&sparkline=false'

  // call crypto price data from coingecko api
  useEffect(() => {
    axios.get(geckoURL).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <>
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h1" variant="h4" align="center">
        Crypto Prices in USD
      </Typography>

      <Grid container spacing={2} >
        <Grid item xs={4}>

        </Grid>
      </Grid>
      </Paper>
    </>
  )
}

export default GetEthPrice