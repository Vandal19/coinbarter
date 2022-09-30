import { styled } from "@mui/system"
import { Button, Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/navbar";
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { borders, borderRadius } from '@mui/system';


// props for mobile menu divider
const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function MobileMenu() {

  // state to open and close mobile menu
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
        <CloseIcon sx={{ fontSize: '2.5rem', color: lighten(0.09, Colors.secondary)}}/>  
      </DrawerCloseButton> )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Cell Phones</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Computers</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Gaming</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Television</ListItemText>
          </ListItemButton>
        </List>
     </Drawer>
    </>
  )
};