import { Box, VStack } from "@chakra-ui/react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    useDisclosure,
    AlertDialogCloseButton,
    AlertDialogFooter,
    Button
} from "@chakra-ui/react";

import { useState } from "react";

function Card(props) {

    const [isOpen, setOpen] = useState(false)

    const [dish, setDish] = useState("")
    const [price, setPrice] = useState("")


    function handle(e) {
        console.log(e.target.id)
        setDish(props.r.title)
        setPrice(props.r.price)
        setOpen(true)
    }

    return (

        <>


            <AlertDialog
                motionPreset='slideInBottom'

                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <h2>Successfull order</h2>
                        </AlertDialogHeader>
                    <AlertDialogBody>
                        <h3>{dish}</h3>
                        <h4>€ {price}</h4>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button onClick={() => setOpen(false)}>
                            Close
                        </Button>

                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Box bg="#495E57" borderWidth='3px' borderRadius='lg' color="white" >
                <VStack align="left" spacing="30px">

                    <img id="card-img" src={props.r.image} />
                    <div className="card">
                        <h3 color="black">{props.r.title}</h3>
                        <p>{props.r.price}</p>
                    </div>
                    <p id="card-text">{props.r.description}</p>
                    <button onClick={(e) => handle(e)} className="orderBtn">Order now</button>


                </VStack>



            </Box>

        </>
    )

}

export default Card;