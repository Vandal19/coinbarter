import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";


export default function NavBar() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {matches ? <h1>Mobile</h1> : <h1>Desktop</h1>}
    </>
  )

}