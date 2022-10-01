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
import React from "react";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

const Cart = () => {
  const { cart, setShowCart, showCart, count, setCount } = useUIContext();
  

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
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
            alt={item.title}
            src={`${item.cover_image_url}?w=120&h=120&fit=crop&auto=format`}
            srcSet={`${item.cover_image_url}?w=120&h=120&fit=crop&auto=format&dpr= 3x`}
            sx={{objectFit: "contain"}}
          />
        </Avatar>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{item.brand_name}</Typography>
          <Typography varirant="subtitle2">{item.description}</Typography>
          <Typography sx={{display:'flex', alignItems:'center', alignContent:'flex-end', paddingTop:2}}>
            <Button color={Colors.Black} onClick={()=> setCount(count-1)} sx = {{ fontSize: 25}} >-</Button>
            <Typography>{count}</Typography>
            <Button color={Colors.Black} onClick={()=> setCount(count+1)} sx = {{ fontSize: 25}} >+</Button>
          </Typography>
        </Box>
        <Box display="flex" alignItems={"flex-end"}>
        <Typography variant="body1" sx={{ mr: 2 }}>
          ${item.price}
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
      {cart.length > 0 ?
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
        <Button sx={{ mt:4 }} variant="contain">
          Proceed to Payment
        </Button>
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
