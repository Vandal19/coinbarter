import { Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui'
import { Colors } from '../../styles/theme'
import { useTheme } from "@mui/material/styles";

const Cart = () => {
  const { cart, setShowCart, showCart } = useUIContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  
  return (
    <Drawer
      open={showCart}
      anchor="right"
      PaperProps={{sx: { width:300, background: Colors.light_gray, borderRadius: 0}}}>
      My Cart
    </Drawer>
  )
}

export default Cart
