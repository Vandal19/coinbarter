import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorite,
  clearFavorites,
} from "../../features/favoriteSlice";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { useTheme } from "@mui/material/styles";
import { addToCart } from "../../features/cartSlice";
import CloseIcon from "@mui/icons-material/Close";

const Favorite = () => {
  const { showFav, setShowFav } = useUIContext();
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);
  const { favoriteTotalQuantity } = useSelector((state) => state.favorite);
  const theme = useTheme();

  // useEffect(() => {
  //   dispatch(sumQuantity());
  // }, [favorite, dispatch])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromFavorite = (product) => {
    dispatch(removeFromFavorite(product));
  };

  const handleClearFavorites = (product) => {
    dispatch(clearFavorites(product));
  };

  const isItemInCart = (id) => {
    for (let item of cart.cartItems) {
      if (item.id === id) return true;
    }
    return false;
  };

  const favContent = favorite.favoriteItems?.map((product) => (
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
          ></Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body1" sx={{ mr: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              ${product.price}
              {isItemInCart(product.id) ? (
                <Button sx={{ fontSize: 12 }}>In Cart</Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => handleAddToCart(product)}
                  style={{ fontSize: 10 }}
                >
                  Add to Cart
                </Button>
              )}
            </Box>
            <Button
              variant="outlined"
              onClick={() => handleRemoveFromFavorite(product)}
              sx={{ fontSize: 10, mt: 1 }}
            >
              Remove from Favorites
            </Button>
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  ));

  return (
    <Drawer
      open={showFav}
      onClose={() => setShowFav(false)}
      anchor="right"
      PaperProps={{
        sx: { width: 500, background: Colors.light_gray, borderRadius: 1 },
      }}
    >
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={() => setShowFav(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      {favorite?.favoriteItems?.length > 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
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
              Your Saved Items: {favoriteTotalQuantity} Items
            </Button>
          </Box>

          <Paper elevation={1} variant="outlined">
            {favContent}
          </Paper>

          <Box justifyContent="space-between">
            <br />
            <Button
              variant="contained"
              onClick={handleClearFavorites}
              sx={{ mr: 2 }}
            >
              Clear Favorites
            </Button>
            <Button variant="contained">Proceed to Cart</Button>
          </Box>
        </Box>
      ) : (
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
            Favorites List is Empty
          </Button>
        </Box>
      )}
    </Drawer>
  );
};

export default Favorite;
