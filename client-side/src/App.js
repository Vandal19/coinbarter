import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Products from "./components/products";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import NavBar from "./components/navbar/index.js";
import Footer from "./components/Footer";
import MobileMenu from "./components/drawer";
import { UIProvider } from "./context/ui";
import Cart from "./components/cart";
import SearchBox from "./components/search";
import LogIn from "../src/components/login/Login";
import Favorite from "./components/favorites"
import { useDispatch, useSelector } from 'react-redux';
import { login } from "./features/userSlice";
import { isItemInFavorite } from './features/favoriteSlice'
import Checkout from "./components/checkout/Checkout.js";
import OrderSummary from "./components/checkout/OrdersSummary.js"
import MyOrders from "./components/checkout/MyOrders";
import HomePage from "./components/homepage";

function App() {
  const [name, setName] = useState("");
  // const [home, setHome] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    // axios.get("http://localhost:8000/home").then((res) => {
    //   setHome(res.data);
    // });

    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      dispatch(login(userData))
    }

    const favoriteData = async () => {
      try {
        const myFavorites = await axios.post(`/favorites/${user.id}`)
        // console.log("myfavorite", myFavorites.data)
        // const parseData = JSON.stringify(localStorage.getItem(myFavorites))
        dispatch(isItemInFavorite(myFavorites.data))


      } catch (error) {
        console.log(error.response);
      }
    }
    if(user?.id){
      favoriteData();
      // ordersData();
    }

  }, [dispatch, user?.id])

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
        <UIProvider>
          <NavBar />
          <Routes>
            {/* Login Page*/}
            <Route path="/login" element={<>
            <LogIn />
            </>} />

            {/* Home Page*/}
            <Route path="/" element={<>
            {/* <Banner/>
            <Slider/>

            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Best Sellers</Typography>
            </Box> */}
            <HomePage/>

          </>} />
            <Route path="/products/:id" element={<>
              <Products />
            </>} />

            {/* Login Page*/}
            <Route path="/checkout" element={<>
            <Checkout />
            </>} />

            {/* FOR TESTING -- Cart Page*/}
            <Route path="/order-summary" element={<>
            <OrderSummary />
            </>} />

            {/* FOR TESTING -- My Orders Page*/}
            <Route path="/my-orders" element={<>
            <MyOrders />
            </>} />

          </Routes>
          <Footer />
          <MobileMenu />
          <Favorite />
          <Cart />
          <SearchBox />
        </UIProvider>

        {/*
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
      </Container>
    </ThemeProvider>
  );
}

export default App;