import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Colors } from "../../styles/theme";
import { productDetailQuantity } from "./productDetailQuantity";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



export default function ProductIncDec() {

  const productDetailQuantityValue = productDetailQuantity(1, 20);
  // set value
  const [value, setValue] = useState(1);

  return (
    <Box display="flex" sx={{pr:2}}>
      <IconButton
        sx={{
          borderRadius: 0,
          background: `${Colors.secondary}`
        }}
        onClick={() => setValue(productDetailQuantityValue(value - 1))}>
        <RemoveIcon />
      </ IconButton>

      <Typography
        variant="h6"
        sx={{
          border: `1px solid ${Colors.secondary}`,
          p:2
        }}
      > {value} </Typography>

      <IconButton
        sx={{
          borderRadius: 0,
          background: `${Colors.secondary}`
        }}
        onClick={() => setValue(productDetailQuantityValue(value + 1))}>
        <AddIcon />
      </ IconButton>
    </Box>
  )
}