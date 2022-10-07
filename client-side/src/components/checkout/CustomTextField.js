import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {

  // MUI textfield controller using react hook form
  const { control } = useFormContext({ name, label });

  return (
    <Grid item xs={12} sm={6}>
      <Controller 
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
      />
    </Grid>
  );
}

export default FormInput