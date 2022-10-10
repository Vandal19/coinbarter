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
import { sumTotal, clearCart } from "../../features/cartSlice";
import CartItem from "../cart/cartItem";

const OrderSummary = (product) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order.orderItems);

  console.log("order", order);

  useEffect(() => {
    dispatch(sumTotal());
  }, [cart, dispatch]);

  const handleClearCart = (product) => {
    dispatch(clearCart(product));
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container xs={12} columns={2}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{ width: 1500 }}
      >
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
                <Box display="flex" direction="row">
                  <Button
                    sx={{ mr: 1 }}
                    variant="contained"
                    href="/"
                    alignItems="center"
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    sx={{ ml: 1 }}
                    variant="contained"
                    href="/checkout"
                    alignItems="center"
                  >
                    Proceed to Checkout
                  </Button>
                </Box>
                <CartItem />
              </Box>
              <Grid item xs={12}>
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
                    sx={{ pr: 25, mr: 20 }}
                  >
                    <Typography color={Colors.black} sx={{ fontSize: 20 }}>
                      Subtotal:
                    </Typography>
                    <Typography color={Colors.black} sx={{ fontSize: 20 }}>
                      Shipping:
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color={Colors.black} sx={{ fontSize: 20 }}>
                      ${cart.cartTotalAmount}
                    </Typography>
                    <Typography color={Colors.black} sx={{ fontSize: 20 }}>
                      Free
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Box
                sx={{ mt: 2 }}
                variant="contain"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                {/* <Button href="/checkout">
              Proceed to Payment
            </Button> */}

                <Button variant="contained" onClick={handleClearCart}>
                  Clear Cart
                </Button>
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
              sx={{ m: 5 }}
            >
              <Typography variant="h4" color={Colors.primary}>
                Your cart is empty. Please return to homepage to continue
                shopping!
              </Typography>
              <Button variant="contained" fullWidth={true} href="/">
                Continue Shopping
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Grid>
  );
};

export default OrderSummary;
