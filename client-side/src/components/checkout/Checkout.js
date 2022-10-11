// CART ITEMS RENDERED IN CHECKOUT PAGE FROM CARTITEMS.JS

import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Grid, Container, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { Colors } from "../../styles/theme";
import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
import CryptoPaymentForm from './CryptoPaymentForm';
import { useSelector, useDispatch } from "react-redux";

import ItemsInCart from '../cart/cartItems';
import GetEthPrice from './GetEthPrice';
import CartItem from '../cart/cartItem';
import OrderSummary from './OrdersSummary';


// manage steps for checkout
const steps = ['Shipping address', 'Payment details'];


export default function Checkout() {

  // states to move through steps for checkout
  const [activeStep, setActiveStep] = useState(0);
  // states to capture shipping data
  const [shippingData, setShippingData] = useState({});

  // hook to generate checkout token when user enters checkout process
  // useEffect(() => {
  //   const generateToken = async () => {
  //     try {

  //     } catch (error) {

  //     }
  //   }
  // }, []);

  // capture items in cart data
  const cart = useSelector((state) => state.cart);
  // cart = {cartItems, cartTotalQuantity, cartTotalAmount}
  const cartOrder = cart.cartTotalQuantity;
  // console.log("orders in cart:", cartOrder);


  // move through checkout steps
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // capture shipping data and move to payment step of checkout
  const next = (data) => {
    setShippingData(data);

    nextStep();
  }

  // confirmation msg
  const Confirmation = () => (
    <>
      <Typography variant="h6" gutterBottom>
          Thank you for your purchase!
      </Typography>
      <Grid container spacing={3} component="form">
        <br />
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box
                display="flex"
                alignitems="center"
                fullWidth={true}
                justifyContent="space-between"
                sx={{ mt: 2 }}>
            <Button variant='outlined'
                    fullWidth={true}
                    sx={{ mr: 1 }}
                    href="/">
              Back to Home
            </Button>
            <Button variant='contained'
                    fullWidth={true}
                    sx={{ mr: 1 }}
                    href="/my-orders"
                    onClick>
              View My Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );

  // render different components based on which step user is on
  const Form = () => activeStep === 0
    ? <AddressForm next={next} />
    : <CryptoPaymentForm backStep={backStep} nextStep={nextStep}/>

  return (
    <>
        {cart.cartItems.length > 0 ?
      <Grid container component="main" columns={16} spacing={3}
            sx={{ mb: 40, height: '100vh' }}>
          <>
        <Grid item xs={16}>
          <GetEthPrice />
        </Grid>
        <Grid item xs={8}>
          <Paper variant="outlined" sx={{ mb: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {/* if we are on the last step, then show new component */}
            {activeStep === steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <ItemsInCart />
        </Grid>
          </>
      </Grid>
      :
      <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height= "250px"
      width= "1100px"
      sx={{p:10, m:10}}
    >
      <Typography variant="h4" color={Colors.primary}>
        Your cart is empty. Please return to homepage to continue shopping!
      </Typography>
      <Button variant='contained'
                fullWidth={true}
                sx={{ mr: 1 }} href="/">
                  Continue Shopping
        </Button>
    </Box>
      }
    </>
  );
}
