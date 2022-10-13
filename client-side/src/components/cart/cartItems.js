// CART ITEMS RENDERED IN CHECKOUT PAGE 

import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Colors } from "../../styles/theme";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, sumTotal } from "../../features/cartSlice";
import CartItem from "../cart/cartItem";

import fetch from 'sync-fetch';
import BitPay from "../checkout/BitPay";

const ItemsInCart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(sumTotal());
  }, [cart, dispatch]);

  const handleClearCart = (product) => {
    dispatch(clearCart(product));
  };

  // get eth/usd exchange rate 
  const ccURL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key={524745d7a0665f7b239ce12f2cd467fd8928a0dda89f1589e95b1cc59a03ec0a}'
  // call crypto price data from cryptocompare api
  function getEthFx() {
    let ethFx;
    const response = fetch(ccURL);
    ethFx = response.json();
    return ethFx;
    }
  let ethFx = getEthFx();
  // console.log("ethFx", ethFx);

  // destructure ethFx obj to get ethusd fx rate
  const ethToUsd = ethFx.USD;

  // calculate tax rate of 12%
  const tax = 0.12;
  // calculate cart subtotal, shipping, tax, and total amount in USD
  const cartSubtotal = cart.cartTotalAmount;
  const shippingFee = 10;
  const orderTax = ((cart.cartTotalAmount) * (tax));
  const orderTotal = ((cartSubtotal) + (orderTax) + (shippingFee)).toFixed(2);

  // calculate payment total in ETH
  const paymentTotal = ((orderTotal) / (ethToUsd)).toFixed(4);

  return (
    <Grid container xs={12} columns={2}>

      <Paper
        variant="outlined"
        sx={{ mb: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }  }}
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

            <Grid item xs={12}>
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
                      USD ${orderTotal}
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
            </Grid>
            <br />
            <Grid item>
              <BitPay />
            </Grid>


            <br />
            <Box variant="contain" display="flex">
              <Button
                variant="outlined"
                fullWidth={true}
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
            height="250px"
            width="1100px"
            sx={{ p: 10, m: 10 }}
          >
            <Typography variant="h4" color={Colors.primary}>
              Your cart is empty. Please return to homepage to continue
              shopping!
            </Typography>
            <Button
              variant="contained"
              fullWidth={true}
              sx={{ mr: 1 }}
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

export default ItemsInCart;
