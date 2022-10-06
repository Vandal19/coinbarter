import React from 'react'
import { useState, useEffect } from 'react';
import { Grid, Container, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import ItemsInCart from '../cart/cartItems';


// manage steps for checkout
const steps = ['Shipping address', 'Payment details'];


export default function Checkout() {

  // states to move through steps for checkout
  const [activeStep, setActiveStep] = useState(0);

  // hook to generate checkout token when user enters checkout process
  // useEffect(() => {
  //   const generateToken = async () => {
  //     try {
        
  //     } catch (error) {
        
  //     }
  //   }
  // }, []);

  // confirmation msg
  const Confirmation = () => (
    <div>Confirmation</div>
  );

  // render different components based on which step user is on
  const Form = () => activeStep === 0 
    ? <AddressForm />
    : <PaymentForm />

  return (
    <>
      <Grid container component="main" columns={16} spacing={3}
            sx={{ mb: 4, height: '100vh' }}>
        <Grid item xs={8}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
      </Grid>
    </>
  );
}


{/* return (
  <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">Checkout</Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step) => {
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          })}
        </Stepper>
      </Paper>
    </main>
  </>
)
} */}
