import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { 
  ActionIconsContainerDesktop, 
  ActionIconsContainerMobile, 
  MyList, 
  NavBarContainer, 
  NavBarHeader 
} from "../../styles/navbar";
import Actions from "./actions";
import SearchIcon from '@mui/icons-material/Search';


export default function NavBarDesktop({ matches }) {

  return (
    <NavBarContainer>
      <NavBarHeader>CoinBarter</NavBarHeader>
      <MyList type="row">
        <ListItemText primary="Cell Phones" />
        <ListItemText primary="Computers" />
        <ListItemText primary="Gaming" />
        <ListItemText primary="Television" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches}/>
    </NavBarContainer>
  );
  
}