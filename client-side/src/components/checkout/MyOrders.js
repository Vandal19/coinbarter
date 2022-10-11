import React from "react";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import { orderTotal } from "../../features/orderSlice"
import axios from "axios";


import fetch from 'sync-fetch';

const MyOrders = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orderItems)
  const orderTotalAmount = useSelector((state) => state.order.orderTotalAmount)
  console.log("order", order)

  // useEffect(() => {
  //   dispatch(orderTotal());
  // }, [order, dispatch]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(orderTotal());
  }, [order, dispatch]);

  // useEffect(() => {
  //   const ordersData = async () => {
  //     try {
  //       const myOrders = await axios.post(`/my-orders/${user.id}`)
  //       // const parseData = JSON.stringify(localStorage.getItem(myFavorites))
  //       console.log("data", myOrders.data)
  //       dispatch(orderDetails(myOrders.data))

  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   }
  //   if(user?.id){
  //     ordersData();
  //   }
  // }, [dispatch, user?.id])

  const ccURL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key={524745d7a0665f7b239ce12f2cd467fd8928a0dda89f1589e95b1cc59a03ec0a}'

  function getEthFx() {
    let ethFx;
    const response = fetch(ccURL);
    ethFx = response.json();
    return ethFx;
    }
  let ethFx = getEthFx();
  // console.log("ethFx", ethFx);
  // ethusd fx
  const ethToUsd = ethFx.USD;

  const tax = 0.12;
  // cart subtotal, shipping, tax, and total amount in USD

  const orderSubtotal = orderTotalAmount
  const shippingFee = 10;
  const orderTax = ((orderSubtotal) * (tax));
  const orderFinalTotal = ((orderSubtotal) + (orderTax) + (shippingFee)).toFixed(2);

  const paymentTotal = ((orderFinalTotal) / (ethToUsd)).toFixed(4);

  return (
    <Container maxWidth="xl">
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography fontSize="35px">Orders</Typography>
      </Grid>
      <Divider />
      <Box display="flex" justifyContent="center">
        <Grid container spacing={1.5}>
          <Grid
            item
            xs={8.5}
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography fontSize="25px">Item</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography fontSize="25px">Price</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography fontSize="25px">Qty</Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography fontSize="25px">Amount</Typography>
          </Grid>
        </Grid>
      </Box>

      <Paper variant="outlined" sx={{ my: { xs: 3, md: 2 } }}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <OrderItem />
        </Box>
      </Paper>
      <Grid item xs={12} sx={{p3:5}}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start"
                >
                <Grid item justifyContent="space-between">
                  <Typography color={Colors.black} sx={{ fontSize: 18 }}>
                    Subtotal:
                  </Typography>
                  <Typography color={Colors.black} sx={{ fontSize: 18 }}>
                    Shipping & Handling:
                  </Typography>
                  <Typography color={Colors.black} sx={{ fontSize: 18 }}>
                    Tax:
                  </Typography>
                </Grid>
                <Grid item justifyContent="space-between">
                  <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                    USD ${orderTotalAmount}
                  </Typography>
                  <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                    USD $10
                  </Typography>
                  <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                    USD ${((orderTotalAmount) * (tax)).toFixed(2)}
                  </Typography>
                </Grid>
              </Box>

              <Divider sx={{ mt: 1, mb: 1 }} />

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start"
                >
                  <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  sx={{ pr: 16, mr: 20 }}
                  >
                    <Typography color={Colors.black} sx={{ fontSize: 18 }}>
                      Order Total:
                    </Typography>
                    <Typography color={Colors.black} sx={{ fontSize: 18 }}>
                      ETH/USD Exchange Rate:
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 18, fontWeight: 'medium', color: 'red'}}>
                      Payment Total:
                    </Typography>
                  </Box>
                  <Grid justifyContent="space-between">
                    <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                      USD ${orderFinalTotal}
                    </Typography>
                    <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                      USD ${ethToUsd}
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: 18, fontWeight: 'medium', color: 'red'}} align="right">
                      {paymentTotal} ETH
                    </Typography>
                  </Grid>
                </Box>
            <Divider sx={{pb:5}}/>
            </Grid>
    </Container>
  )
};

export default MyOrders;
