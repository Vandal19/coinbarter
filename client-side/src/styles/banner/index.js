import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/fira-code";
import "@fontsource/inter";


// banner container
export const BannerContainer = styled(Box)(({}) => ({

  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  height: '100%',
  padding: '100px 0px',
  background: 'linear-gradient(45deg, #185a9d 30%, #43cea2 90%)',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  borderRadius: 3,
  // [theme.breakpoints.down('sm')]: {
  //   flexDirection: 'column',
  //   alignItems: 'center'
  // }
}));

// banner image
export const BannerImage = styled('img')(({ src, theme }) => ({

  src: `url(${src})`,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px'
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: '300px'
  }
}));

// banner content
export const BannerContent = styled(Box)(() => ({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 420,
  padding: '30px'
}));

// banner title
export const BannerTitle = styled(Typography)(({theme}) => ({

  lineHeight: 1.2,
  fontSize: '47px',
  marginBottom: '20px',
  fontFamily: '"Fira Code", monospace',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px'
  }
}));

// banner description
export const BannerDescription = styled(Typography)(({theme}) => ({

  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em"
  }
}));

// shop button on banner
export const BannerShopButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
  name: 'ShopButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === '#FE6B8B',
    props.color === '#FF8E53',
  ]
})(({}) => ({

  padding: '10px 0px',
  color: Colors.white,
  fontWeight: "bold",
  fontSize: '16px',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  // [theme.breakpoints.down('sm')]: {
  //   padding: '5px 0px',
  //   fontSize: '14px'
  // }
}));