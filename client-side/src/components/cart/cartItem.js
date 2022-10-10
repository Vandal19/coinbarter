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
import {
  addToCart,
  removeFromCart,
  decreaseCart,
} from "../../features/cartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCartQty = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("product2", product);
  };

  return cart.cartItems?.map((product) => (
    // <Grid container xs={12} columns={2}>

    //   <Paper
    //     variant="outlined"
    //     sx={{ mb: 1, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 },  }}
    //   >
    //      <Box
    //         display="flex"
    //         justifyContent="center"
    //         flexDirection="column"
    //         alignItems="center"
    //       >

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
            sx={{ objectFit: "contain" }}
          />
        </Avatar>
        <Box display="flex" flexDirection="column" sx={{ pr: 4 }}>
          <Typography variant="subtitle2">{product.brand_name}</Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "flex-end",
              paddingTop: 2,
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Button
                onClick={() => handleDecreaseCartQty(product)}
                sx={{ fontSize: 25 }}
              >
                -
              </Button>
              <Typography>{product.cartQuantity}</Typography>
              <Button
                onClick={() => handleAddToCart(product)}
                sx={{ fontSize: 25 }}
              >
                +
              </Button>
              <Button
                onClick={() => handleRemoveFromCart(product)}
                sx={{ fontSize: 15 }}
              >
                Remove
              </Button>
            </Box>
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <Typography variant="body1" sx={{ mr: 2 }}>
            ${product.price * product.cartQuantity}
          </Typography>
        </Box>
      </Box>
      <Divider  />
    </Box>
    // </Box>
    // </Paper>
    // </Grid>
  ));
};

export default CartItem;
