import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card, CardContent, CardMedia, Grid, Typography }from '@mui/material';

// carousel styling
// const useStyles = makeStyles((theme) => ({
//   carousel: {
//     height: "50%",
//     display: "flex",
//     alignItems: "center",
//   },
//   carouselItem: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//     textTransform: "uppercase",
//     color: "white",
//   },
// }));

const CryptoCarousel = () => {
  // const classes = useStyles();

  const [carousel, setCarousel] = useState([null]);

  const cgURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Cripple%2Csolana%2Cdogecoin%2Cpolkadot%2Cmatic-network%2Ctron%2Cavalanche-2%2Clitecoin%2Cchainlink%2Cstellar%2Caave%2Cterra-luna-2&order=market_cap_desc&sparkline=false'

  // call crypto price data from coingecko api
  useEffect(() => {
    axios.get(cgURL).then((response) => {
      setCarousel(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  console.log("carousel", carousel);

  const items = carousel.map((coin) => {
    let priceChange = coin?.price_change_percentage_24h;

    return (
      <>
        <Card sx={{ display: 'flex'}} elevation={0}>
          <CardMedia
            component="img"
            image={coin?.image}
            sx={{ width: "80px", height: "100%", mx: 1, my: 1}}
          />
          <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: 'uppercase' }}>
                  {coin?.symbol}
              </Typography>

              {priceChange < 0 ? (
                <Typography variant="body2" color="red">
                  {coin?.price_change_percentage_24h?.toFixed(2)}%
                </Typography>
              ) : (
                <Typography variant="body2" color="green">
                  +{coin?.price_change_percentage_24h?.toFixed(2)}%
                </Typography>
              )}

              <Typography sx={{ fontSize: 15 }}>
                ${coin?.current_price.toLocaleString()}
              </Typography>
          </CardContent>
        </Card>
      </>
    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  // hide component if there's an error with api call
  // if (!carousel) return null;

  return (
    <Grid container>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </Grid>
  )
}

export default CryptoCarousel