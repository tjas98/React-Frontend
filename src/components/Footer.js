import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import logo from '../assets/Logo .svg'
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate()

  return (
    <Box
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      color="white"
    >


      <footer>

      </footer>

      <HStack
        px={16}
        py={4}
        justifyContent="space-between"
        alignItems="left"
      >
        <VStack >
          <img src={logo} />
          <p>We are a family owned Mediterranean restaurant, focused on traditonal recipes served with a modern twist.</p>

        </VStack>




        <HStack spacing={8}>
        <h3>Important links</h3>
          <VStack alignItems="left"> 
            
            <a style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>Menu</a>
            <a style={{ cursor: 'pointer' }} onClick={() => navigate("/book")}>Book a table</a>
            <a style={{ cursor: 'pointer' }}>About us</a>
          </VStack>
        </HStack>




      </HStack>



    </Box>
  )
}

export default Footer;