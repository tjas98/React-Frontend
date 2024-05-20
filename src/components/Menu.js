import React, { useState } from "react";
import recipes from "../recpies";
import Card from './Card'
import { Box, Heading, Text } from "@chakra-ui/react";




function Menu() {

   

    return (
        <>

            

            <Heading textAlign="center" id="menu"> This week specials!</Heading>
            <br></br>
            
            <Box
                margin="auto"
                width="60%"

                display="grid"
                gridTemplateColumns="auto auto auto"
                gridGap={10}
            >
                {
                    recipes.map(recipe =>
                        <Card r={recipe} />
                    )
                }
            </Box>
        </>

    )
}

export default Menu;