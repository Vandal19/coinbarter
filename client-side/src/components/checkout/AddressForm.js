import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@mui/material';
import { Box } from "@mui/system";
import { useState, useEffect } from 'react';

// import FormInput from './CustomTextField';

// comment to resolve conflict

export default function AddressForm({ next }) {

  // methods to run form using react hook form
  // const methods = useForm();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    // then send new setValues obj to backend using axios post
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <Grid container spacing={3} component="form" onSubmit={submitForm}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={values.firstName}
            onChange={handleChange('firstName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={values.lastName}
            onChange={handleChange('lastName')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={values.email}
            onChange={handleChange('email')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={values.address}
            onChange={handleChange('address')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={values.city}
            onChange={handleChange('city')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={values.state}
            onChange={handleChange('state')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={values.zip}
            onChange={handleChange('zip')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={values.country}
            onChange={handleChange('country')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
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
                    href="/order-summary">
              Back to Order Summary
            </Button>
            <Button variant='contained'
                    fullWidth={true}
                    sx={{ mr: 1 }}
                    type='submit'
                    onClick={next}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}