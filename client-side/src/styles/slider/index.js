import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/fira-code";
import "@fontsource/inter";

// slider container
export const SliderContainer = styled(Box)(({theme}) => ({

  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 0px 15px 0px',
  overflow: 'hidden',
  background: Colors.secondary
}));

// slider messages
export const MessageText = styled(Typography)(({theme}) => ({

  fontFamily: '"Inter", sans-serif',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  color: Colors.white,
  fontSize: '1.2rem'
}));