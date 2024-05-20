import { Heading } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import FullScreenSection from "./FullScreenSection";

function Booking() {


    return (
        <>
            <Heading id="booking">Book a table </Heading>
            <br></br>
            <BookingForm />
        </>



    )
}

export default Booking;