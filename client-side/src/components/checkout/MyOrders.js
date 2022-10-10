import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import ItemsInCart from "../cart/cartItems";

const MyOrders = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container xs={12} columns={2}>
      <Box               display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              sx = {{ width: 1500}}>

      <Paper
        variant="outlined"
        sx={{ mb: 1, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, width: 1400 }}

        >
        {/* render below if there are items in cart */}
        {cart.cartItems.length > 0 ? (
          <>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"

            >
              <Button
                sx={{ mb: 2 }}
                variant="contained"
                href="/checkout"
                alignItems="center"
              >
                Proceed to Checkout
              </Button>
            <ItemsInCart />
            </Box>
          </>
        ) : (
          // render below if cart is empty
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="300px"
            width="1300px"
            sx={{  m: 5 }}
          >
            <Typography variant="h4" color={Colors.primary}>
              Your cart is empty. Please return to homepage to continue
              shopping!
            </Typography>
            <Button
              variant="contained"
              fullWidth={true}
              href="/"
            >
              Continue Shopping
            </Button>
          </Box>
        )}
      </Paper>
      </Box>
    </Grid>
  );
};

export default MyOrders;
