import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";
import Box from '@mui/material/Box';

export default function Banner() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
        
      <BannerContent>

        <BannerTitle variant="h2">
          Buy Now, <br/>
          Pay With<Box sx={{ display: 'inline', fontStyle: 'italic' }}> Crypto</Box>
        </BannerTitle>

        <BannerDescription variant="body2">
          E-commerce Reimagined
        </BannerDescription>

        <BannerShopButton href="/login">SHOP NOW</BannerShopButton>

      </BannerContent>
      <BannerImage src="/images/banner/homepage-dcut.png"/>
    </BannerContainer>
  );
}