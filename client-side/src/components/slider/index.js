import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { MessageText, SliderContainer } from "../../styles/slider";


const messages = [
  "Free shipping on all domestic orders",
  "20% off on your first order!",
  "Save up to $200 on select laptops"
];

export default function Slider() {
  
  // state to loop through slider messages
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  // hook to slide messages
  useEffect(() => {

    setTimeout(() => {
      setShow(false)
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex(i => (i + 1) % messages.length)

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <SliderContainer>
      <Slide direction={show ? "left" : "right"} in={show} 
        timeout={{
          enter: 500,
          exit: 100
        }}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>
            {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </SliderContainer>
  );
}