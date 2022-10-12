import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";
import Box from '@mui/material/Box';

export default function Banner() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
        <BannerImage src="/images/banner/homepage-dcut.png"/>
      <BannerContent>

        <Typography>
        </Typography>

        <BannerTitle variant="h2">
          Buy Now, <br/>
          Pay With<Box sx={{ display: 'inline', fontStyle: 'italic' }}> Crypto</Box>
        </BannerTitle>

        <BannerDescription variant="subtitle">
          E-commerce Reimagined
        </BannerDescription>

        <BannerShopButton href="products/bestsellers_electronics" color="primary">SHOP NOW</BannerShopButton>

      </BannerContent>
    </BannerContainer>
  );
}