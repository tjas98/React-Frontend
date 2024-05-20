
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import { ChakraProvider, VStack } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>

      <main>
        <VStack align="stretch" spacing="20px">
          <BrowserRouter>

            <Nav />
            <Header />
            <Main />
            <Footer />
          </BrowserRouter>
        </VStack>

      </main>




    </ChakraProvider>

  );
}

export default App;
