import { Typography, Box, TextField } from '@mui/material'
import { styled } from "@mui/system"
import React from 'react'
import { Colors } from '../theme';

export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em'
}));

export const FooterContainer = styled(Box)(({theme}) => ({
  background: Colors.shaft,
  color: Colors.white,
  padding: 4,
  paddingTop: 36,
  paddingBottom: 48,
  fontSize: 12,
  [theme.breakpoints.up("md")]: {
    padding: 40,
    fontSize: 14,
    position: 'relative'
  }
}))

export const SubscribeTextField = styled(TextField)(() => ({
  '.MuiInputLabel-root': {
    color: Colors.secondary,
  },
  '.MuiInput-root::before': {
    borderBottom: `1px solid`,
    color: Colors.secondary
  },
  '.MuiInputBase-input': {
    color: Colors.white
  }
}))



