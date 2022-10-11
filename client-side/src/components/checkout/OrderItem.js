import {
  Avatar,
  Button,
  Container,
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

  const order = useSelector((state) => state.order);

  // console.log("order", order);

  return order.orderItems?.map((product) => (
    <Container maxWidth="xl" key={product.id}>
      <Box display="flex" justifyContent="center" flexDirection="row" >
        <Grid container spacing={1} sx={{pb:3}}>
          <Grid item xs={1.5}>
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
                src={`${product.cover_image_url}?w=60&h=60&fit=crop&auto=format`}
                srcSet={`${product.cover_image_url}?w=60&h=60&fit=crop&auto=format&dpr= 2x`}
                sx={{ objectFit: "contain" }}
              />
            </Avatar>
          </Grid>
            <Grid item xs={7} display="flex" direction="row" justifyContent="flex-start" alignItems='center'>
              <Typography fontSize="20px">{product.brand_name}</Typography>
            </Grid>
            <Divider orientation="vertical"/>
          <Grid item xs={1} display="flex" direction="row" justifyContent="center" alignItems='center'>
            <Typography fontSize="20px">${product.price}</Typography>
          </Grid>
          <Divider orientation="vertical"/>
          <Grid item xs={1} display="flex" direction="row" justifyContent="center" alignItems='center'>
            <Typography fontSize="20px">{product.cartQuantity}</Typography>
          </Grid>
          <Divider orientation="vertical"/>
          <Grid item xs={1} display="flex" direction="row" justifyContent="center" alignItems='center'>
            <Typography fontSize="20px">${product.price * product.cartQuantity}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Container>

    // <Box key={product.id}>
    //   <Box
    //     display="flex"
    //     alignItems="start"
    //     justifyContent="space-between"
    //     sx={{ pt: 2, pb: 2 }}
    //   >
    //     <Avatar
    //       sx={{
    //         width: 150,
    //         height: 150,
    //         backgroundColor: "transparent",
    //       }}
    //       variant="square"
    //     >
    //       <img
    //         alt={product.title}
    //         src={`${product.cover_image_url}?w=120&h=120&fit=crop&auto=format`}
    //         srcSet={`${product.cover_image_url}?w=120&h=120&fit=crop&auto=format&dpr= 2x`}
    //         sx={{ objectFit: "contain" }}
    //       />
    //     </Avatar>
    //     <Box display="flex" flexDirection="column" sx={{ pr: 4 }}>
    //       <Typography variant="subtitle2">{product.brand_name}</Typography>
    //       <Typography
    //         sx={{
    //           display: "flex",
    //           alignItems: "center",
    //           alignContent: "flex-end",
    //           paddingTop: 2,
    //         }}
    //       >
    //       </Typography>
    //     </Box>
    //     <Box display="flex" alignItems="flex-end">
    //       <Typography variant="body1" sx={{ mr: 2 }}>
    //         ${product.price * product.quantity}
    //       </Typography>
    //     </Box>
    //   </Box>
    //   <Divider variant="inset" />
    // </Box>
  ));
};

export default OrderItem;
