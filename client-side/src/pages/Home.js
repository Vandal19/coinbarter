import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import { useNavigate } from 'react-router-dom';

let theme = createTheme({
  palette: {
    pimary: {
      main: grey,
    },
  },
});

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} columns={16}>
        <CssBaseline />

        <Grid
          item
          xs={8}
          direction='column'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
          textAlign='center'
          square>
            <Box
            sx={{
              my: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
          <Typography component="h1" variant="h3" align="left">
            Buy Now, <br/>
            Pay With<Box sx={{ display: 'inline', fontStyle: 'italic', m: 1 }}>Crypto</Box>
          </Typography>
          <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate('/')}
              >
                Start Browsing
              </Button>
            </Box>
        </Grid>

        <Grid
          item
          xs={8}
          direction='column'
          justifyContent='center'
          alignItems='center'
          minHeight='100vh'
          textAlign='center'
          square
          sx={{
            backgroundImage: 'url(./helena.png)',
            backgroundColor: (t) =>
              t.palette.mode === 'light',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}