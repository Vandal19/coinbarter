// import { display, height } from '@mui/system'
// import React from 'react'
// import { useTheme } from '@mui/material/styles';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { Card, CardContent, CardMedia, Grid, Paper, Typography }from '@mui/material';


// // const useStyles = makeStyles((theme) => ({
// //   carousel: {
// //     height: "50%",
// //     display: "flex",
// //     alignItems: "center"
// //   },
// // }));

// const CryptoCarousel = () => {
//   // const classes = useStyles();

//   const [carousel, setCarousel] = useState([null]);

//   const cgURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Cripple%2Csolana%2Cdogecoin%2Cpolkadot%2Cmatic-network%2Ctron%2Cavalanche-2%2Clitecoin%2Cchainlink%2Cstellar%2Cshiba-inu%2Caave%2Cterra-luna-2&order=market_cap_desc&per_page=100&page=1&sparkline=false'

//   // call crypto price data from coingecko api
//   useEffect(() => {
//     axios.get(cgURL).then((response) => {
//       setCarousel(response.data)
//     }).catch((error) => {
//       console.log(error)
//     })
//   }, []);

//   console.log("carousel", carousel);

//   // const items = carousel.map((coin) => {
//   //   return (
//   //     <>
//   //       <img
//   //         src={coin?.image}
//   //         alt={coin.name}
//   //         height="50"
//   //         style={{ marginBottom: 5 }}
//   //       />
//   //       <span>
//   //         {coin?.symbol}
//   //         &nbsp;
//   //         <span>
//   //           {coin?.price_change_percentage_24h.toFixed(2)}
//   //         </span>
//   //       </span>
//   //     </>
//   //   )
//   // })

//   const responsive = {
//     512: {
//       items: 4,
//     },
//   };

//   // hide component if there's an error with api call
//   if (!carousel) return null;

//   return (
//     <Grid container>
//       <AliceCarousel 
//         mouseTracking
//         infinite
//         autoPlayInterval={1000}
//         animationDuration={1500}
//         disableDotsControls
//         disableButtonsControls
//           responsive={responsive}
//           autoPlay
          
//       />
//     </Grid>
//   )
// }

// export default CryptoCarousel