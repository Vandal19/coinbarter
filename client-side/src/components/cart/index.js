import {
  Button,
  Drawer,
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
import { clearCart, sumTotal } from "../../features/cartSlice";
import CloseIcon from '@mui/icons-material/Close';
import CartItem from "./cartItem"

const Cart = () => {
  // const { id, category_id, brand_name, cover_image_url, price, create_date, update_date, stock, quantity, totalPrice } = props.product
  const { showCart, setShowCart } = useUIContext();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)

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
            <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={() => setShowCart(false)}>
          <CloseIcon />
        </IconButton>
        </Box>
      {cart.cartItems.length > 0 ?
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
        sx={{ pb: 2 }}
      >
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            sx={{ pb: 2 }}
          >
            <Button
              variant="contained"
              style={{
                minWidth: "150px",
                minHeight: "50px",
                fontSize: "23px",
              }}
            >
              Your Cart Items: {cartTotalQuantity} Items
            </Button>
          </Box>

        <Paper elevation={1} >
        {/* {cart?.cartItems?.map((product, index) => ( */}
          <CartItem  />
        </Paper>

        <br />
        {/* <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="flex-end"> */}
          {/* <Box display="flex" flexDirection="column" sx={{ pr: 35 }}> */}
            {/* <Button variant="outlined" sx = {{ fontSize: 18 }}>
              Subtotal:
            </Button> */}
          {/* </Box> */}
          <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="flex-end">
            <Button variant="contained" sx = {{ fontSize: 15, backgroundColor:"Green" }} align="right">
              Subtotal: USD ${cartTotalAmount.toFixed(2)}
            </Button>
          </Box>
        {/* </Box> */}

        <Box variant="contain" justifyContent="space-between">
        <br />
          <Button variant="contained" onClick={handleClearCart}  sx={{ mr: 2 }}>
            Clear Cart
          </Button>
          <Button variant="contained" href="/order-summary">
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
      sx={{ p: 2 }}
    >
      <Button
        variant="contained"
        style={{
          minWidth: "150px",
          minHeight: "100px",
          fontSize: "25px",
        }}
      >
        Your Cart is Empty
      </Button>
    </Box>
      }
    </Drawer>
  );

};


export default Cart;