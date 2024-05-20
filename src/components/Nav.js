
import React from "react";
import logo from '../assets/logo.png'
import { Box, HStack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Nav() {

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
            <nav>

                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <a href="/">
                        <img src={logo} width="20%" alt="logo" />
                    </a>

                    <HStack spacing={8}>


                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Menu</a>


                        <a style={{ cursor: 'pointer' }} onClick={() => navigate('/book')} >Book a table</a>





                    </HStack>
                </HStack>






            </nav>
        </Box>

    )
}

export default Nav;