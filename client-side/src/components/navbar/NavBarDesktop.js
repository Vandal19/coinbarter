import * as React from "react";
import {
  InputBase,
} from "@mui/material";
import {
  MyList,
  NavBarContainer,
  NavBarHeader,
  NavBarCategories,
} from "../../styles/navbar";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";
import { useState } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import axios from "axios";
import { setProducts } from "../../features/productSlice";
import { useDispatch } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "7ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

export default function NavBarDesktop({ matches }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    // e.preventDefault()
    try {
      const response = await axios.post(`/products/?search=${search}`);
      dispatch(setProducts(response.data));
      console.log("parseResponse", response.data)
    } catch (error) {}
  };

  return (
    <NavBarContainer>
      <NavBarHeader>
        <Link to="/" style={{ textDecoration: "none", color: Colors.primary }}>
          CoinBarter
        </Link>
      </NavBarHeader>
      <MyList type="row" sx={{pr:4}}>
        <NavBarCategories>
          <Link
            to="/products/bestsellers_electronics"
            style={{ textDecoration: "none", color: Colors.primary }}
          >
            Best Sellers
          </Link>
          <Link
            to="/products/2407748011"
            style={{ textDecoration: "none", color: Colors.primary }}
          >
            Cell Phones
          </Link>
          <Link
            to="/products/565108"
            style={{ textDecoration: "none", color: Colors.primary }}
          >
            Computers
          </Link>
          <Link
            to="/products/7926841011"
            style={{ textDecoration: "none", color: Colors.primary }}
          >
            Gaming
          </Link>
          <Link
            to="/products/6463520011"
            style={{ textDecoration: "none", color: Colors.primary }}
          >
            Television
          </Link>
        </NavBarCategories>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // onClick={onSubmitForm}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSubmit("");
              }
            }}
          />
        </Search>
      </MyList>
      <Actions matches={matches} />
    </NavBarContainer>
  );
}
