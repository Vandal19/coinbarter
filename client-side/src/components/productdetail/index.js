import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  Button,
  Divider,
} from "@mui/material";
import { DialogProps } from "@mui/material/Dialog";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/products";
import ProductIncDec from "../ui";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../features/favoriteSlice";
import { addToCart } from "../../features/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

function slideTransition(props) {
  return <Slide direction="up" {...props} />;
}

// wrapper for product details container
const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

// wrapper for product details info
const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 1000,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const dispatch = useDispatch();

  // add item to favorites
  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product));
  };

  // add item to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // displays for desktop and mobile
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      TransitionComponent={slideTransition}
      variant="permanat"
      open={open}
      maxWidth="lg"
    >
      <DialogTitle
        sx={{
          background: Colors.primary,
        }}
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"flex-end"}
        >
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.cover_image_url} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography sx={{ lineHeight: 2 }} variant="h5">
              {product.brand_name}
            </Typography>
            {/* <Typography variant="subtitle">SKU 123</Typography> */}
            <Typography variant="subtitle2">
              Availability: {product.stock} in stock
            </Typography>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Typography variant="h7" sx={{ fontSize: "30px" }}>
              About This Item: <br />
            </Typography>
            <Typography variant="h7" sx={{ fontWeight: 500 }}>
              * Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
              * Aliquam tincidunt mauris eu risus.
              <br /> * Vestibulum auctor dapibus neque.
              <br />* Nunc dignissim risus id metus.
              <br />* Cras ornare tristique elit.
              <br />* Vivamus vestibulum ntulla nec ante.
              <br />* Praesent placerat risus quis eros.
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <ProductIncDec />
            </Box>
            <Box
              display="flex"
              alignitems="center"
              justifyContent="space-between"
              sx={{ mt: 4, color: Colors.light }}
            >
              <Button
                variant="contained"
                fullWidth={true}
                sx={{ mr: 1 }}
                onClick={() => handleAddToCart(product)}
                startIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                fullWidth={true}
                sx={{ mr: 1 }}
                isFav={0}
                onClick={() => handleAddToFavorite(product)}
                startIcon={<FavoriteIcon />}
              >
                Add to Favorites
              </Button>
            </Box>
            <Box sx={{ mt: 4, color: Colors.light }}>
              <FacebookIcon href="https://www.facebook.com/" />
              <TwitterIcon
                sx={{ pl: theme.spacing(3) }}
                href="https://www.twitter.com/"
              />
              <InstagramIcon
                sx={{ pl: theme.spacing(3) }}
                href="https://www.instagram.com/"
              />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
