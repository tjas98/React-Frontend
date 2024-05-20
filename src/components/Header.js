import React from "react";
import { Image, Box, Flex, Heading, Text, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import slika from '../assets/restauranfood.jpg'
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    return (


        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned restaurant, focused on traditional recipes served with a modern twist</p>
                    <button onClick={() => navigate("/book")}>Reserve table</button>
                </div>

                
            </section>
        </header>

        /*
    <div className="banner">
            <div className="grid-item">
                <VStack align="left" spacing="30px">
                    <Heading id="heading1">Little Lemon </Heading>
                    <Text as='b' fontSize='xl'>Chicago</Text>
                    <Text>We are a family owned restaurant, focused on traditional recipes served with a modern twist</Text>
                </VStack>
            </div>
            <div className="grid-item">
                <Image objectFit='cover' boxSize='30%' borderRadius="10px" id="slika-banner" src={slika} />
            </div>
           

            
        </div>
    */


        


        






    )
}

export default Header;