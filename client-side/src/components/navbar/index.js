import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";


export default function NavBar() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {matches ? (
        <NavBarMobile matches={matches} /> 
      ) : (
        <NavBarDesktop matches={matches} />
      )}
    </>
  );

}