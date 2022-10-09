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
import { addToCart, removeFromCart, decreaseCart, clearCart, sumTotal } from "../../features/cartSlice";

const OrderSummary = (product) => {
  // const { id, category_id, brand_name, cover_image_url, price, create_date, update_date, stock, quantity, totalPrice } = props.product
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("product", cart)
  // const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)


  // useEffect(() => {
  //   // dispatch(addToCart())
  //   dispatch(sumTotal());
  // }, [cart, dispatch])

  // useEffect(() => {
  //   const cartData = JSON.parse(localStorage.getItem('cartItems'));
  // //   console.log("cart4", cart)
  //     if (cartData) {
  //       dispatch(addToCart(cart))
  //     }

  // }, [cart, dispatch])

        //  dispatch(addToCart(cart))

  // const handleAllCart = (product) => {
  //   dispatch(addToCart(product))
  // }
  // console.log("cart56", handleAllCart)

    // console.log("cart2", cart)

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

export default OrderSummary;
