import * as React from 'react';
import { Breadcrumbs, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
  NavBarContainer,
  NavBarHeader,
  NavBarCategories
} from "../../styles/navbar";
import Actions from "./actions";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";
import { useUIContext } from '../../context/ui';

import { SearchBoxContainer, SearchField, Search, SearchIconWrapper, SearchFieldText } from "../../styles/search";


export default function NavBarDesktop({ matches }) {

  // hook for search bar dropdown
  const { setShowSearchBox } = useUIContext();

  return (
    <NavBarContainer>
      <NavBarHeader>
      <Link to="/" style={{ textDecoration: "none", color: Colors.primary }}>CoinBarter</Link>
      </NavBarHeader>
      <MyList type="row">
        <NavBarCategories>
        <Link to="/cell-phones" style={{ textDecoration: "none", color: Colors.primary }}>Cell Phones</Link>
        <Link to="/computers" style={{ textDecoration: "none", color: Colors.primary }}>Computers</Link>
        <Link to="/gaming" style={{ textDecoration: "none", color: Colors.primary }}>Gaming</Link>
        <Link to="/television" style={{ textDecoration: "none", color: Colors.primary }}>Television</Link>
        </NavBarCategories>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={() => setShowSearchBox(true)}/>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches}/>
    </NavBarContainer>
  );

}
