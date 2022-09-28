import { Icon, IconButton } from "@mui/material";
import { NavBarContainer, NavBarHeader } from "../../styles/navbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";


export default function NavBarMobile({ matches }) {

  return (
    <NavBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavBarHeader textAlign={"center"} variant="h4">
        CoinBarter
      </NavBarHeader>
      <IconButton>
          <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </NavBarContainer>
  )

};