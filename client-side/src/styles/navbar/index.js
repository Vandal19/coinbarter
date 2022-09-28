import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, color } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/fira-code";

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