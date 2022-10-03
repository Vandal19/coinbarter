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
import { addToCart, removeFromCart, decreaseCart, sumTotal } from "../../features/cartSlice";

const Cart = () => {
  const { setShowCart, showCart } = useUIContext();
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
    dispatch(addToCart(product))
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
            srcSet={`${product.cover_image_url}?w=120&h=120&fit=crop&auto=format&dpr= 3x`}
            sx={{objectFit: "contain"}}
          />
        </Avatar>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{product.brand_name}</Typography>
          <Typography varirant="subtitle2">{product.description}</Typography>
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
          ${((product.price)).toFixed(2) * product.cartQuantity}
        </Typography>
        </Box>
      </Box>
      <Divider variant="inset" />
    </Box>
  ));

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
          {cartContent}
        </Paper>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="flex-start"  >
          <Box display="flex" flexDirection="column" sx={{ pr: 10, mr:10 }}>
            <Typography color={Colors.black} sx = {{ fontSize: 35}}>Subtotal:</Typography>
            <Typography color={Colors.black} sx = {{ fontSize: 15}}>Free Shipping* </Typography>
          </Box>
          <Box>
            <Typography color={Colors.black}sx = {{ fontSize: 30}}>${cart.cartTotalAmount.toFixed(2)}</Typography>

          </Box>
        </Box>
        <Box sx={{ mt:4 }} variant="contain">
          <Button>
            Proceed to Payment
          </Button>
          <Button>Clear Cart</Button>
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
