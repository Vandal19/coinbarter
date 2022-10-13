import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Box,
  Button,
  Badge,
  color,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../styles/navbar";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { clearFavorites } from "../../features/favoriteSlice";
import { clearCart } from "../../features/cartSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Actions({ matches }) {
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { favoriteTotalQuantity } = useSelector((state) => state.favorite);
  const user = useSelector((state) => state.user.user);
  const { setShowCart, setShowFav, anchor, setAnchor, open, setOpen } =
    useUIContext();

  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    if (anchor) {
      setAnchor(null);
    }
    setOpen(false);
  };

  const dispatch = useDispatch();


  const logoutAuth = () => {
    localStorage.clear();
      dispatch(clearFavorites())
      dispatch(clearCart())
      dispatch(logout());
      navigate("/");
      console.log("logout", logoutAuth)
    }




  const login = () => {
    navigate("/login");
  }

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Badge badgeContent={favoriteTotalQuantity} color="secondary">
              <FavoriteIcon onClick={() => setShowFav(true)} />
            </Badge>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Badge badgeContent={cartTotalQuantity} color="secondary">
              <ShoppingCartIcon
                onClick={() => setShowCart(true)}
              ></ShoppingCartIcon>
            </Badge>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton
          key={"authenticate"}
          variant="contained"
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: matches && Colors.secondary,
            }}
          >
            <Button variant="contained" onClick={handleClick}>
              <AccountCircle />
            </Button>
            {!user ? (
              <>
                <ListItemText sx={{ p: 1, display:'none'}}/>
              </>
            ) : (
              <>
                <ListItemText
                  primary={
                    <Paper sx={{ p: 1 }}>
                      <Typography
                        noWrap={false}
                        sx={{ wordWrap: "break-word" }}
                        textAlign={"right"}
                      >
                        {`Logged in as ${user?.name}`}
                      </Typography>
                    </Paper>
                  }
                />
              </>
            )}
            <Popover
              open={open}
              anchorEl={anchor}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
              // display="flex" flexDirection='row'
            >
            {user ? (
              <Box display="flex" flexDirection='column' alignItems="center">
              <Button href="/my-orders">My Orders</Button>
              <Button onClick={(e) => logoutAuth(e)}>Logout</Button>
              </Box>
            ) : (
              <Box display="flex" flexDirection='column' alignItems="center">
              <Button onClick={(e) => login(e)}>Login</Button>
              <Button>Register</Button>
              </Box>
            )}
            </Popover>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
