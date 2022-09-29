import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/fira-code";

// slider container
export const SliderContainer = styled(Box)(({theme}) => ({

  [theme.breakpoints.up('md')]: {
    padding: '30px 0px 30px 0px'
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 0px 15px 0px',
  overflow: 'hidden',
  background: Colors.secondary
}));

// slider messages
export const MessageText = styled(Typography)(({theme}) => ({

  fontFamily: '"Fira Code", monospace',
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  color: Colors.white,
  fontSize: '1.2rem'
}));