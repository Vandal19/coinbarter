import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import { Link } from "react-router-dom"


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