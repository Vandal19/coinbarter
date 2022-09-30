import { Breadcrumbs, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/fira-code";
import Chip from '@mui/material/Chip'
import { emphasize } from '@mui/material/styles';

// container
export const NavBarContainer = styled(Box)(() => ({

  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px'
}));

// header
export const NavBarHeader = styled(Typography)(() => ({

  padding: '4px',
  flexGrow: 1,
  fontSize: '4em',
  fontFamily: '"Fira Code", monospace',
  color: Colors.primary
}));




export const NavBarCategories = styled(Breadcrumbs)(({theme}) => ({
  label: 'Catalog',
  fontSize: '1.1em',
}))

// my list of items on navbar
export const MyList = styled(List)(({ type }) => ({

  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center'
}));

// icon actions for mobile
export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`
}));

// icon actions for desktop
export const ActionIconsContainerDesktop = styled(Box)(() => ({

  flexGrow: 0
}));

// button to close mobile menu
export const DrawerCloseButton = styled(IconButton)(() => ({

  position: 'absolute',
  top: 10,
  left: '250px',
  zIndex: 1999
}));