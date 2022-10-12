// INDIVIDUAL CART ITEM COMPONENTS RENDERED IN CART/INDEX.JS

import {
  Avatar,
  Button,
  Divider,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
} from "../../features/cartSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
    <Box key={product.id}>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        sx={{ mt: 2, mb: 2 }}
      >
        <Avatar
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "transparent",
            mr: 1,
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
              <Tooltip title="Decrease Quantity">
                <Button
                  onClick={() => handleDecreaseCartQty(product)}
                  sx={{ fontSize: 20, mr: 2 }}
                  variant="outlined"
                >
                  -
                </Button>
              </Tooltip>
              <Typography sx={{ fontSize: 20 }}>{product.quantity}</Typography>
              <Tooltip title="Increase Quantity">
                <Button
                  onClick={() => handleAddToCart(product)}
                  sx={{ fontSize: 20, ml: 2, mr: 3 }}
                  variant="outlined"
                >
                  +
                </Button>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteOutlineIcon
                    onClick={() => handleRemoveFromCart(product)}
                    sx={{ fontSize: 35, color: "maroon" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <Typography variant="body1" sx={{ mr: 2 }}>
            ${product.price * product.quantity}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
    // </Box>
    // </Paper>
    // </Grid>
  ));
};

export default CartItem;
