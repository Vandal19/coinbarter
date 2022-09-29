import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FooterTitle, FooterContainer } from "../styles/footer";
import { Colors } from "../styles/theme";

const Footer = () => {
  return (
    <FooterContainer>

      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Hello there
          </Typography>
        </Grid>
        </Grid>
    </ FooterContainer>
  );
};

export default Footer;
