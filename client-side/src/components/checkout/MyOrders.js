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
import { orderDetails } from "../../features/orderSlice"

const MyOrders = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orderItems)
  const orderTotalAmount = useSelector((state) => state.order.orderTotalAmount)

  // useEffect(() => {
  //   dispatch(orderTotal());
  // }, [order, dispatch]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.user.user)

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

      <Paper variant="outlined" sx={{ mb: 21, my: { xs: 3, md: 2 } }}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <OrderItem />
        </Box>
      </Paper>
      <Grid item xs={12} sx={{pt:5, pb:5}}>
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
          >
            <Typography sx={{ fontSize: 20 }}>
              Merchandise Total
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              Shipping:
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20 }}>
            ${orderTotalAmount}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              Free
            </Typography>
          </Box>
        </Box>
        <Divider sx ={{pt:2}}/>
        <Grid item xs={12} sx={{pt:3, pb:5}}>
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
          >
            <Typography sx={{ fontSize: 20 }}>
              Order Total
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20 }}>
              ${orderTotalAmount}
            </Typography>
          </Box>
        </Box>
        <Divider sx ={{pt:2}}/>
      </Grid>
      </Grid>
    </Container>
  )
};

export default MyOrders;
