import { Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui'
import { Colors } from '../../styles/theme'
import { useTheme } from "@mui/material/styles";
import { Box } from '@mui/system';

const Cart = () => {
  const { cart, setShowCart, showCart } = useUIContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const cartContent = cart.map(item => {
    <Box key={item.id}>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="space-between"
        sx={{ pt:2, pb:2 }}

    </Box>
  })
  return (
    <Drawer
      open={showCart}
      anchor="right"
      PaperProps={{sx: { width:300, background: Colors.light_gray, borderRadius: 0}}}>
      {cartContent}
    </Drawer>
  )
}

export default Cart
