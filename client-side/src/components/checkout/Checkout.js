import React from 'react'
import { useState } from 'react';
import { Container, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';


// manage steps for checkout
const steps = ['Shipping address', 'Payment details'];

export default function Checkout() {
  
  // states to move through steps for checkout
  const [activeStep, setActiveStep] = useState(0);

  // render different components based on which step user is on
  const Form = () => activeStep === 0 
    ? <AddressForm />
    : <PaymentForm />

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
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
      </Container>
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
