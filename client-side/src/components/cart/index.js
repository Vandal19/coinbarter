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
        sx: { width: 500, background: Colors.light_gray, borderRadius: 0 },
      }}
    >
      {cart.cartItems.length > 0 ?
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{ p: 4 }}
      >
        <Typography variant="h4" color={Colors.black}>
          Your Cart
        </Typography>
        <Paper elevation={0} sx={{ p: 1, pl: 0.5 }}>
        {/* {cart?.cartItems?.map((product, index) => ( */}
          <CartItem  />
        </Paper>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start"  >
          <Box display="flex" flexDirection="column" sx={{ pr: 10, mr:10 }}>
            <Typography color={Colors.black} sx = {{ fontSize: 35}}>Subtotal:</Typography>
            <Typography color={Colors.black} sx = {{ fontSize: 15}}>Free Shipping* </Typography>
          </Box>
          <Box>
            <Typography color={Colors.black}sx = {{ fontSize: 30}}>${cartTotalAmount}</Typography>

          </Box>
        </Box>
        <Box sx={{ mt:4 }} variant="contain">
          <Button onClick={handleClearCart}>Clear Cart</Button>
          <Button href="/order-summary" >
            <Typography variant='contained'
                    fullWidth={true}  align="center" style={{ wordWrap: "break-word" }}>
            Proceed to Order Summary
            </Typography>
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
      <Button onClick={()=> setShowCart(false)}>
        Close
      </Button>
    </Drawer>
  );

};


export default Cart;