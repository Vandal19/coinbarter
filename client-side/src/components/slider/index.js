import { Box, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { MessageText, SliderContainer } from "../../styles/slider";


const messages = [
  "Free shipping on domestic orders",
  "20% off on your first order!",
  "Save up to $200 on select laptops"
];

export default function Slider() {

  // hook to contain messages in slider container
  const containerRef = useRef();
  
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
    <SliderContainer ref={containerRef}>
      <Slide container={containerRef.current} 
        direction={show ? "left" : "right"} in={show} 
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