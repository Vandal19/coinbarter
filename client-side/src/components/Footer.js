import { Button, Box, Grid, List, ListItemText, Typography, Stack } from "@mui/material";
import React from "react";
import { FooterTitle, FooterContainer, SubscribeTextField } from "../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import Colors from '../styles/theme'


const Footer = () => {
  return (
    <Grid item xs={12} sx={{ pt: 10 }}>
    <FooterContainer sx={{ mt: 10 }}>
      <br />
      <Grid container spacing={2} justifyContent="center" >
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Condition
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wish List
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <Stack>
            <SubscribeTextField color='primary' label='Email Address' variant='standard'/>
              <Button
                startIcon={<SendIcon sx={{color: Colors.white}}/>}
                sx={{ mt:4, mb: 4}}
                variant="contained">
                  Subscribe
                </Button>
          </Stack>
        </Grid>
      </Grid>
    </FooterContainer>
    </Grid>
  );
};

export default Footer;
