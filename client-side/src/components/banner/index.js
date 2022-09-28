import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";
import Box from '@mui/material/Box';

export default function Banner() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>
        <BannerImage src="/images/banner/homepage-hero.jpeg"/>
      <BannerContent>

        <Typography>
        </Typography>

        <BannerTitle variant="h2">
            e-commerce reimagined
        </BannerTitle>

        <BannerDescription variant="subtitle">
            Buy Now, <br/>
            Pay With<Box sx={{ display: 'inline', fontStyle: 'italic' }}> Crypto</Box>
        </BannerDescription>

      </BannerContent>
    </BannerContainer>
  );
}