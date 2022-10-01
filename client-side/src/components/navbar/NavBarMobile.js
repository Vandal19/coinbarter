import { Icon, IconButton } from "@mui/material";
import { NavBarContainer, NavBarHeader } from "../../styles/navbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { useUIContext } from "../../context/ui";


export default function NavBarMobile({ matches }) {

  // hook to close mobile menu drawer
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <NavBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <NavBarHeader textAlign={"center"} variant="h4">
        CoinBarter
      </NavBarHeader>
      <IconButton>
          <SearchIcon onClick={() => setShowSearchBox(true)} />
      </IconButton>
      <Actions matches={matches} />
    </NavBarContainer>
  )

};