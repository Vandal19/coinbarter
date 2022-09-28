import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveAppBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";

import Products from "./components/products";
import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import NavBar from "./components/navbar/index.js";

function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/home").then((res) => {
      setHome(res.data);
    });
  }, []);

  async function postName(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/post_name", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <NavBar />
        {/*
      ResponsiveAppBar
      Banner
      Title
      Products
      Footer
      Searchbox
    */}
        {/* <ResponsiveAppBar /> */}
          {/* <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </Router> */}
        <Products />
      </Container>
    </ThemeProvider>
  );
}

export default App;
