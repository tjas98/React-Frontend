
import { Heading, Button } from "@chakra-ui/react";


function ConfirmBooking() {


    return (
        <div className="confirmed">
            <br></br>
            <Heading color="black">Your reservation has been confirmed</Heading>
            <br></br>
            <Button><a href="/">See our menu</a></Button>
        </div>
    )
}

export default ConfirmBooking;