import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext, AuthProvider } from '../../context/authProvider';
import { useFormik } from "formik";
import * as Yup from "yup"

const axios = require('axios');

const theme = createTheme();

export default function LogIn() {

  const formik = useFormik({
    initialValues: {username: "", password: ""},
    validationSchema: Yup.object({
      username: Yup.string()
      .required("Username required!")
      .min(6, "Username too short!")
      .max(30, "Username too long"),
      password: Yup.string()
      .required("Password required!")
      .min(6, "Password too short!")
      .max(30, "Password too long"),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    }
  });
  // auth state for global context
  const { setAuth } = useContext(AuthContext)

  // references
  const userRef = useRef();
  const errRef = useRef();

  // states
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post('/login',
        JSON.stringify({user, pwd}),
        // {
        //   headers: { 'Content=Type': 'application/json'},
        //   withCredentials: true
        // }
      );
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if(!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized User');
      } else {
        setErrMsg('Login Failed');
      }
    }

    setSuccess(false);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '90vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={3}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(./images/banner/homepage-hero.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* display success page if logged in, else display login page */}
        <>
          {success ? (
            <Grid item xs={12} sm={8} md={5}  square>
              <Typography component="h1" variant="h5">
                  You are Logged In!
              </Typography>
              <br />
              <p>
                <a href="#">Go to Home</a>
              </p>
            </Grid>

          ) : (

            <Grid item xs={12} sm={8} md={5}  square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive">
                    {errMsg}
                </p>
                <Typography component="h1" variant="h5">
                  Log in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    ref={userRef}
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Log In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>

                </Box>
              </Box>
            </Grid>
          )}
        </>


      </Grid>
    </ThemeProvider>
  );
}