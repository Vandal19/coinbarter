import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Badge, color, Divider, ListItemButton, ListItemIcon, Popover, Typography } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList
} from "../../styles/navbar";
import { Colors } from '../../styles/theme';
import { useUIContext } from '../../context/ui';
import { useSelector, useDispatch } from 'react-redux';


export default function Actions({ matches }) {

  const { cartTotalQuantity } = useSelector(state => state.cart)
  const { favoriteTotalQuantity } = useSelector(state => state.favorite)

  const { setShowCart, setShowFav, anchor, setAnchor, open, setOpen } = useUIContext();

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;


  const handleClick = (e) => {
    setAnchor(e.currentTarget)
    setOpen((prevOpen) => !prevOpen);
  }

  const handleClose = () => {
    if (anchor) {
      setAnchor(null);
    }
    setOpen(false);
  }

  const dispatch = useDispatch();

  return (
    <Component>
      <MyList type="row">
      <ListItemButton
          sx={{
            display: 'flex',
            justifyContent: "center"
          }}
      >
        <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary
            }}
        >
          <Badge badgeContent={favoriteTotalQuantity} color="secondary">
          <FavoriteIcon onClick={()=> setShowFav(true)}/>
          </Badge>
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation='vertical' flexItem />

      <ListItemButton
          sx={{
            justifyContent: "center"
          }}
      >
        <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary
            }}
        >
          <Badge badgeContent={cartTotalQuantity} color="secondary">
            <ShoppingCartIcon onClick={()=> setShowCart(true)}>
            </ShoppingCartIcon>
          </Badge>
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation='vertical' flexItem />

      <ListItemButton variant="contained"
          sx={{
            justifyContent: "center"
          }}
      >
        <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: matches && Colors.secondary
            }}
        >
          <Button variant='contained' onClick={handleClick}>
            <AccountCircle />
          </Button>
          <Popover open={open} anchorEl={anchor} onClose={handleClose} anchorOrigin={{vertical:'bottom', horizontal:'right'}}
            >
            <Button variant='h6'>Hello World</Button>
          </Popover>
        </ListItemIcon>
      </ListItemButton>
      </MyList>
    </Component>
  )
};