import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { color, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList
} from "../../styles/navbar";
import { Colors } from '../../styles/theme';


export default function Actions({ matches }) {

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
          <ShoppingCartIcon />
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