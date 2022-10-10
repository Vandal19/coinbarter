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

const MyOrders = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg" >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography>Orders</Typography>
      </Grid>
      <Divider />
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>Item</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Price</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Qty</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Amount</Typography>
          </Grid>
        </Grid>
      </Box>

      <Paper
        variant="outlined"
        sx={{ mb: 1, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <OrderItem />
        </Box>
      </Paper>
    </Container>
  );
};

export default MyOrders;
