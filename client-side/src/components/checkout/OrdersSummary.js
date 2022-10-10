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
    <Grid container xs={12} columns={2} alignItems='center'>

      <Paper
        variant="outlined"
        sx={{ mb: 1, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
        {/* render below if there are items in cart */}

        {cart.cartItems.length > 0 ? (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h4" color={Colors.black} align="center">
                Order Summary
              </Typography>
              <Paper elevation={0} sx={{ p: 1, pl: 0.5 }}>
                <CartItem />
              </Paper>
            
              {/* SUBTOTAL & SHIPPING COMPONENTS */}
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

              {/* CONTINUE SHOPPING & PROCEED TO CHECKOUT BUTTON */}
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
                  sx={{ ml:1, mr:1 }}
                  variant="contained"
                  href="/checkout"
                  alignItems="center"
                  >
                  Proceed to Checkout
                </Button>
                <Button
                variant="contained"
                sx={{ mr: 1 }}
                onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              </Box>
            </Box>
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
    </Grid>
  );
};

export default OrderSummary;
