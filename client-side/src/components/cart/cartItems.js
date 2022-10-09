// SHOW ITEMS IN CART -- OUTSIDE OF DRAWER

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
import { addToCart, removeFromCart, decreaseCart, clearCart, sumTotal } from "../../features/cartSlice";

const ItemsInCart = () => {
  const { showCart, setShowCart } = useUIContext();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(sumTotal());
  }, [cart, dispatch])

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const handleDecreaseCartQty = (product) => {
    dispatch(decreaseCart(product))
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({product}))
  }

  const handleClearCart = (product) => {
    dispatch(clearCart(product))
  }


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const cartContent = cart.cartItems?.map((product) => (
    <Box key={product.id}>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        sx={{ pt: 2, pb: 2 }}
      >
        <Avatar
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "transparent",
          }}
          variant="square"
        >
          <img
            alt={product.title}
            src={`${product.cover_image_url}?w=120&h=120&fit=crop&auto=format`}
            srcSet={`${product.cover_image_url}?w=120&h=120&fit=crop&auto=format&dpr= 2x`}
            sx={{objectFit: "contain"}}
          />
        </Avatar>
        <Box display="flex" flexDirection="column" sx={{pr:4}}>
          <Typography variant="subtitle2">{product.brand_name}</Typography>
          <Typography sx={{display:'flex', alignItems:'center', alignContent:'flex-end', paddingTop:2}}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Button onClick={() => handleDecreaseCartQty(product)}sx = {{ fontSize: 25}} >-</Button>
              <Typography>{product.cartQuantity}</Typography>
              <Button onClick={() => handleAddToCart(product)} sx = {{ fontSize: 25}} >+</Button>
              <Button onClick={() => handleRemoveFromCart(product)} sx = {{ fontSize: 15}}>
                Remove
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
        <Typography variant="body1" sx={{ mr: 2 }}>
          ${(product.price) * product.cartQuantity}
        </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 1, mb: 1 }} />
    </Box>
  ));


  return (
    <Grid container xs={12}  columns={2}>
      <Paper variant="outlined"
              sx={{ mb: 1, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

        {/* render below if there are items in cart */}
        {cart.cartItems.length > 0 ?

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
            {cartContent}
          </Paper>

          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-start">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{ pr: 25, mr:20 }}>
                  <Typography
                    color={Colors.black}
                    sx = {{ fontSize: 20}}>
                      Subtotal:
                  </Typography>
                  <Typography
                    color={Colors.black}
                    sx = {{ fontSize: 20}}>
                      Shipping:
                  </Typography>
              </Box>
              <Box>
                  <Typography
                    color={Colors.black}
                    sx = {{ fontSize: 20}}>
                      ${cart.cartTotalAmount}
                  </Typography>
                  <Typography
                    color={Colors.black}
                    sx = {{ fontSize: 20}}>
                      Free
                  </Typography>
              </Box>
            </Box>
          </Grid>

          <Box sx={{ mt: 2 }} variant="contain">
            {/* <Button href="/checkout">
              Proceed to Payment
            </Button> */}
            <Button variant='contained'
                    fullWidth={true}
                    sx={{ mr: 1 }} onClick={handleClearCart}>
                      Clear Cart
            </Button>
          </Box>
        </Box>

        // render below if cart is empty
        :
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          sx={{p:4}}
        >
          <Typography variant="h4" color={Colors.primary}>
            Your cart is empty!
          </Typography>
        </Box> }
     </Paper>
    </Grid>
  );

}


export default ItemsInCart;