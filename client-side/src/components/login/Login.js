import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext, AuthProvider } from "../../context/authProvider";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getFormLabelUtilityClasses } from "@mui/material";

const axios = require("axios");

const theme = createTheme();
export default function LogIn() {
  // auth state for global context
  // const { setAuth } = useContext(AuthContext)

  // references
  // const userRef = useRef();
  // const errRef = useRef();

  // states
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd])

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   try {
  //     const response = await axios.post('/login',
  //       JSON.stringify({user, pwd}),
  //       // {
  //       //   headers: { 'Content=Type': 'application/json'},
  //       //   withCredentials: true
  //       // }
  //     );
  //     // const accessToken = response?.data?.accessToken;
  //     // const roles = response?.data?.roles;
  //     // setAuth({ user, pwd, roles, accessToken });
  //     setUser('');
  //     setPwd('');
  //     setSuccess(true);
  //   } catch (err) {
  //     if(!err?.response) {
  //       setErrMsg('No Server Response');
  //     } else if (err.response?.status === 400) {
  //       setErrMsg('Missing Username or Password');
  //     } else if (err.response?.status === 401) {
  //       setErrMsg('Unauthorized User');
  //     } else {
  //       setErrMsg('Login Failed');
  //     }
  //   }

  //   setSuccess(false);

  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });

  // };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={3}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(./images/banner/homepage-hero.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.mode === "light",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* display success page if logged in, else display login page */}
        <>
          {success ? (
            <Grid item xs={12} sm={8} md={5}>
              <Typography component="h1" variant="h5">
                You are Logged In!
              </Typography>
              <br />
              <p>
                <a href="#">Go to Home</a>
              </p>
            </Grid>
          ) : (
            <Grid item xs={12} sm={8} md={5}>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <p
                  // ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <Typography component="h1" variant="h5">
                  Log in
                </Typography>
                <Formik
                  initialValues={{ email: "", password: "", remember: false }}
                  onSubmit={(values, actions) => {
                    const vals = { ...values };
                    actions.resetForm();
                    fetch("http://localhost:8000/auth/login", {
                      method: "POST",
                      credentials: "include",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(vals),
                    })
                      .catch((response) => {
                        if (
                          !response ||
                          !response.ok ||
                          response.status >= 400
                        ) {
                          return;
                        }
                        return response.json;
                      })
                      .then((data) => {
                        if (!data) return;
                        console.log(data);
                      });
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Please enter valid email")
                      .required("Email required!")
                      .min(6, "Email too short!")
                      .max(30, "Email too long"),
                    password: Yup.string()
                      .required("Password is required!")
                      .min(
                        6,
                        "Password should be of minimum 6 characters length!"
                      )
                      .max(30, "Password too long"),
                  })}
                >
                  {(formik) => (
                    <Form
                      as={Form}
                      component="form"
                      sx={{ mt: 1 }}
                      // onSubmit={formik.handleSubmit}
                    >
                      <Field
                        as={TextField}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        // ref={userRef}
                        // error={formik.touched.email && Boolean(formik.errors.email)}
                        // helperText={formik.touched.email && formik.errors.email}
                        // {...formik.getFieldProps("email")}
                      />
                      <Field
                        as={TextField}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        // error={formik.touched.password && Boolean(formik.errors.password)}
                        // helperText={formik.touched.password && formik.errors.password}
                        // {...formik.getFieldProps("password")}
                      />
                      {/* <Field
                        as={FormControlLabel}
                        name="remember"
                        control={<Checkbox name="checkedB" color="primary" />}
                        label="Remember me"
                      /> */}

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        // disabled={formik.onSubmit}
                      >
                        {/* {formik.onSubmit ? "Loading" : "Login"} */}
                        Login
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
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>
          )}
        </>
      </Grid>
    </ThemeProvider>
  );
}
