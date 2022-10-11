// GET PRICE & PRICE CHANGE OF BTC ETH LTC IN USD

import React from 'react'
import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Paper, Typography }from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import axios from 'axios';


const GetEthPrice = () => {

  const [data, setData] = useState(null);

  const geckoURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20litecoin%2C%20solana&order=market_cap_desc&per_page=3&page=1&sparkline=false'

  // call crypto price data from coingecko api
  useEffect(() => {
    axios.get(geckoURL).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  // console.log("geckoAPI:", data);

  // hide component if there's an error with api call
  if (!data) return null;

  return (
    <>
      <Grid container spacing={3} >

        <Grid item xs={3}>
          <Card sx={{ display: 'flex'}}>
            <CardMedia
              component="img"
              image={data[0].image}
              sx={{ width: "80px", height: "100%", mx: 1, mt: 1}}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data[0].name}
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  ${data[0].current_price.toLocaleString()}
                </Typography>

                {data[0].price_change_percentage_24h < 0 ? (
                  <Typography variant="body2" color="red">
                    <SouthEastIcon fontSize='small'/> {data[0].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                ) : (
                  <Typography variant="body2" color="green">
                    <NorthEastIcon fontSize='small'/> {data[0].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                )}

              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ display: 'flex'}}>
            <CardMedia
              component="img"
              image={data[1].image}
              sx={{ width: "80px", height: "100%", mx: 1, mt: 1}}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data[1].name}
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  ${data[1].current_price.toLocaleString()}
                </Typography>

                {data[1].price_change_percentage_24h < 0 ? (
                  <Typography variant="body2" color="red">
                    <SouthEastIcon fontSize='small'/> {data[1].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                ) : (
                  <Typography variant="body2" color="green">
                    <NorthEastIcon fontSize='small'/> {data[1].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                )}

              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ display: 'flex'}}>
            <CardMedia
              component="img"
              image={data[2].image}
              sx={{ width: "80px", height: "100%", mx: 1, mt: 1}}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data[2].name}
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  ${data[2].current_price.toLocaleString()}
                </Typography>

                {data[2].price_change_percentage_24h < 0 ? (
                  <Typography variant="body2" color="red">
                    <SouthEastIcon fontSize='small'/> {data[2].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                ) : (
                  <Typography variant="body2" color="green">
                    <NorthEastIcon fontSize='small'/> {data[2].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                )}

              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card sx={{ display: 'flex'}}>
            <CardMedia
              component="img"
              image={data[3].image}
              sx={{ width: "80px", height: "100%", mx: 1, mt: 1}}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data[3].name}
                </Typography>
                <Typography sx={{ fontSize: 15 }}>
                  ${data[3].current_price.toLocaleString()}
                </Typography>

                {data[3].price_change_percentage_24h < 0 ? (
                  <Typography variant="body2" color="red">
                    <SouthEastIcon fontSize='small'/> {data[3].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                ) : (
                  <Typography variant="body2" color="green">
                    <NorthEastIcon fontSize='small'/> {data[3].price_change_percentage_24h.toFixed(2)}%
                  </Typography>
                )}

              </CardContent>
          </Card>
        </Grid>

      </Grid>
    </>
  )
}

export default GetEthPrice