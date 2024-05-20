import React from "react";
import FullScreenSection from "./FullScreenSection";
import BookingForm from './BookingForm'
import Booking from './Booking'
import ConfirmBooking from './ConfirmBooking'

import Menu from "./Menu";

import { Route, Routes } from 'react-router-dom'

function Main() {

    


    return (

        <FullScreenSection
        
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="white"
        minHeight="70vh"
    > 
            <main>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/book" element={<Booking />} />
                    <Route path="/confirmed" element={<ConfirmBooking />} />
                </Routes>
            </main>
    </FullScreenSection>
        
            

            




        
    )
}

export default Main;