import { Typography, Box } from '@mui/material'
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
  paddingTop: 48,
  paddingBottom: 48,
  fontSize: 12,
  [theme.breakpoints.up("md")]: {
    padding: 40,
    fontSize: 14
  }
}))




