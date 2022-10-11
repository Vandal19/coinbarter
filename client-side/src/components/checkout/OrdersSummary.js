import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
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


  // calculate tax rate of 12%
  const tax = 0.12;
  // cart subtotal, shipping, tax, and total amount in USD
  const cartSubtotal = cart.cartTotalAmount;
  const shippingFee = 10;
  const orderTax = ((cart.cartTotalAmount) * (tax));
  const orderTotal = ((cartSubtotal) + (orderTax) + (shippingFee)).toFixed(2);

  return (
    <Grid container component="main" columns={12} alignItems='center' 
          sx={{ pl: 2}}>

    <Grid xs={4}>
      <Paper></Paper>
    </Grid>

      <Paper
        variant="outlined"
        sx={{ mb: 1, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
        {/* render below if there are items in cart */}

        {cart.cartItems.length > 0 ? (
            <Grid item xs={12}
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h4" color={Colors.black} align="center">
                Review Your Order
              </Typography>
              <Paper elevation={0} sx={{ p: 1 }}>
                <CartItem />
              </Paper>
            
              {/* SUBTOTAL & SHIPPING COMPONENTS */}
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
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
                      USD ${cart.cartTotalAmount}
                    </Typography>
                    <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                      USD $10
                    </Typography>
                    <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                      USD ${((cart.cartTotalAmount) * (tax)).toFixed(2)}
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
                    sx={{ pr: 55, mr: 20 }}
                    >
                      <Typography color={Colors.black} sx={{ fontSize: 18 }}>
                        Estimated Order Total:
                      </Typography>
                    </Box>
                    <Grid justifyContent="space-between">
                      <Typography color={Colors.black} sx={{ fontSize: 18 }} align="right">
                        USD ${orderTotal}
                      </Typography>
                    </Grid>
                  </Box>
              </Grid>
              <br />
              {/* CONTINUE SHOPPING & PROCEED TO CHECKOUT BUTTON */}
              <Box display="flex" direction="row" justifyContent="center" alignItems="center">
                <Button
                  sx={{ mr: 1 }}
                  variant="contained"
                  href="/"
                  alignItems="center"
                  >
                  Continue Shopping
                </Button>
                <Button
                  sx={{ ml:1 }}
                  variant="contained"
                  href="/checkout"
                  alignItems="center"
                  >
                  Proceed to Checkout
                </Button>
              </Box>
              <br />
              <Box display="flex" direction="row" justifyContent="center" alignItems="center">
                <Button
                  variant="outlined"
                  sx={{ m: 1 }}
                  onClick={handleClearCart}
                  >
                  Clear Cart
                </Button>
              </Box>
            </Grid>
            
        ) : (
            // render below if cart is empty
            <Grid item xs={12}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="300px"
              width="1250px"
              sx={{  m: 5 }}
              >
                <Typography variant="h4" color={Colors.primary}>
                  Your cart is empty. Please return to homepage to continue
                  shopping!
                </Typography>
                <br />
                <Button
                  variant="contained"
                  fullWidth={true}
                  href="/"
                >
                  Continue Shopping
                </Button>
              </Box>
            </Grid>
            )}
      </Paper>

      <Grid xs={2}>
      <Paper></Paper>
      </Grid>

    </Grid>
  );
};

export default OrderSummary;
