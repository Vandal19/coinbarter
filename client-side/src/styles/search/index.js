import { TextField } from "@mui/material";
import { Box, styled, alpha } from "@mui/system";
import theme, { Colors } from "../theme";
import InputBase from '@mui/material/InputBase';


// mobile search bar
export const SearchBoxContainer = styled(Box)(({ theme }) => ({

  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: Colors.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99999,
  opacity: 0.9
}));

export const SearchField = styled(TextField)(() => ({

  ".MuiInputLabel-root": {
    color: Colors.secondary
  },

  ".MuiInput-root": {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem'
    },
    color: Colors.secondary
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`
  },

  padding: "0 0 0 40px"
}));


// desktop search bar
export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SearchFieldText = styled(TextField)(() => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
