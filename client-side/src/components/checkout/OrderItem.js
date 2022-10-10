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

const OrderItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return cart.cartItems?.map((product) => (
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
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <Typography variant="body1" sx={{ mr: 2 }}>
            ${product.price * product.cartQuantity}
          </Typography>
        </Box>
      </Box>
      <Divider variant="inset" />
    </Box>
  ));
};


export default OrderItem