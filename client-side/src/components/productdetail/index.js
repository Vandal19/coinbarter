import { Dialog, DialogContent, DialogTitle, IconButton, Slide } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';

function slideTransition(props) {
  return <Slide direction="down" {...props} />
}

export default function ProductDetail({open, onClose, product}) {

  return (
    <Dialog
      TransitionComponent={slideTransition}
      variant="permanat"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{
        background: Colors.secondary
      }}>
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={"center"}>
          Product Title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent> 
      
      </DialogContent>
    </Dialog>
  )
}