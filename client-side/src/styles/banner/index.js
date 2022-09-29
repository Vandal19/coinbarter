import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/fira-code";

// banner container
export const BannerContainer = styled(Box)(({ image, theme}) => ({

  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  background: Colors.light_gray,
  backgroundImage: `url(${image})`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

// banner image
export const BannerImage = styled('img')(({ src, theme }) => ({

  src: `url(${src})`,
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px'
  },

  [theme.breakpoints.down('sm')]: {
    width: '320px',
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
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ]
})(({theme}) => ({

  padding: '10px 0px',
  color: Colors.white,
  fontWeight: "bold",
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '5px 0px',
    fontSize: '14px'
  }
}));