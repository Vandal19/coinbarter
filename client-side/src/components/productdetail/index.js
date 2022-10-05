import { Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery, Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/products";
import ProductIncDec from "../ui";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function slideTransition(props) {
  return <Slide direction="down" {...props} />
}

// wrapper for product details container
const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4)
}));

// wrapper for product details info
const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5
}));

export default function ProductDetail({open, onClose, product}) {

  // displays for desktop and mobile
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      TransitionComponent={slideTransition}
      variant="permanat"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{
        background: Colors.secondary
      }}>
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={"center"}>
          Product Title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent> 
        <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.cover_image_url} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle">SKU 123</Typography>
            <Typography variant="subtitle">Availability: {product.stock} in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h5">
              {product.brand_name}
            </Typography>
            <Typography variant="body">
              {product.brand_name}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between">
                <ProductIncDec />
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box
              display="flex"
              alignitems="center"
              sx={{ mt: 4, color: Colors.light }}>
                <FavoriteIcon sx={{ mr: 2 }} />
                Add to Favorites
            </Box>
            <Box
              sx={{ mt: 4, color: Colors.light }}>
                <FacebookIcon />
                <TwitterIcon sx={{ pl: theme.spacing(4) }} />
                <InstagramIcon sx={{ pl: theme.spacing(4) }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  )
}