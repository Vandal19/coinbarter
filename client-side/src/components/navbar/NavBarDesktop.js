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


export default function NavBarDesktop({ matches }) {

  return (
    <NavBarContainer>
      <NavBarHeader>
      <Link to="/products/bestsellers_electronics" style={{ textDecoration: "none", color: Colors.primary }}>CoinBarter</Link>
      </NavBarHeader>
      <MyList type="row">
        <NavBarCategories>
        <Link to="/products/2407748011" style={{ textDecoration: "none", color: Colors.primary }}>Cell Phones</Link>
        <Link to="/products/565108" style={{ textDecoration: "none", color: Colors.primary }}>Computers</Link>
        <Link to="/products/7926841011" style={{ textDecoration: "none", color: Colors.primary }}>Gaming</Link>
        <Link to="/products/6463520011" style={{ textDecoration: "none", color: Colors.primary }}>Television</Link>
        </NavBarCategories>
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
