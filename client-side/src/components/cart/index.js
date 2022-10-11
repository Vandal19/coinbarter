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
  IconButton
} from "@mui/material";
import { useEffect } from "react";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decreaseCart, clearCart, sumTotal } from "../../features/cartSlice";
import CloseIcon from '@mui/icons-material/Close';
import CartItem from "./cartItem"

const Cart = () => {
  // const { id, category_id, brand_name, cover_image_url, price, create_date, update_date, stock, quantity, totalPrice } = props.product
  const { showCart, setShowCart } = useUIContext();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)

  useEffect(() => {
    dispatch(sumTotal());
  }, [cart, dispatch])

  const handleClearCart = (product) => {
    dispatch(clearCart(product))
  }


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: { width: 500, background: Colors.light_gray, borderRadius: 1 },
      }}
    >
      {cart.cartItems.length > 0 ?
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
        sx={{ p: 4 }}
      >
        <Typography variant="h4" color={Colors.black} gutterBottom>
          Your Cart
          <IconButton onClick={() => setShowCart(false)}>
            <CloseIcon />
          </IconButton>
        </Typography>
        <Paper elevation={1} variant="outlined" sx={{ mx: 2 }}>
        {/* {cart?.cartItems?.map((product, index) => ( */}
          <CartItem  />
        </Paper>

        <br />
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start">
          <Box display="flex" flexDirection="column" sx={{ pr: 28 }}>
            <Typography color={Colors.black} sx = {{ fontSize: 18 }}>
              Subtotal: 
            </Typography>
          </Box>
          <Box>
            <Typography color={Colors.black} sx = {{ fontSize: 18 }} align="right">
              USD ${cartTotalAmount.toFixed(2)}
            </Typography>
          </Box>
        </Box>

        <Box variant="contain" justifyContent="space-between">
        <br />
          <Button onClick={handleClearCart}>
            Clear Cart
          </Button>
          <Button href="/order-summary">
            Review Your Order
          </Button>
        </Box>
      </Box>
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
    </Drawer>
  );

};


export default Cart;