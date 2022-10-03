import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Badge, color, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList
} from "../../styles/navbar";
import { Colors } from '../../styles/theme';
import { useUIContext } from '../../context/ui';
import { useSelector } from 'react-redux';


export default function Actions({ matches }) {

  const { cartTotalQuantity } = useSelector(state => state.cart)

  const { setShowCart } = useUIContext();

  const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

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
          <FavoriteIcon />
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
          <AccountCircle />
        </ListItemIcon>
      </ListItemButton>
      </MyList>
    </Component>
  )
};