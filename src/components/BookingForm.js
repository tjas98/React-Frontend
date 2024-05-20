
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    HStack,
    Select,
    CircularProgress,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    VStack,
    Heading
} from '@chakra-ui/react'

import FullScreenSection from './FullScreenSection';
import { useState, useEffect} from 'react';
import Alert  from './Alert';
import ConfirmBooking from './ConfirmBooking';
import { useNavigate } from 'react-router-dom';

const ErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };


function BookingForm() {
    

    var curr = new Date();
    curr.setDate(curr.getDate());
    var datum = curr.toISOString().substring(0,10);
   
    const [date, setDate] = useState(datum)
    const [guests, setGuests] = useState(2)

    const [avlbTimes, setAvlbTimes] = useState([])

    const [times, setTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    const [occasion, setOccasion] = useState("")

    const [isOpen, setOpen] = useState(false)

    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const [isSubmitted, setSubmitted] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        confirm()
        
    }

    const clearForm = () => {
        setName("")
        setEmail("")
        setAvlbTimes("")
        setDate("")
        setOccasion("")
        setTimes("")
    }
    

    function confirm() {
        setLoading(true)
        setTimeout(() => {
           
            setMessage("Successfully booked a table")
            clearForm()
            navigate('/confirmed')
            setLoading(false)
            
        }, 2000)
        
    }

    const fetchAPI = function() {
        let result = []
        
        for (let i = 17; i < 23; i++) {
            if (Math.random() < 0.5) {
                result.push(i + ':00');
            } 
        }
        
        setAvlbTimes(result)
    }

    useEffect(() => {
        fetchAPI()
    }, [])
    
    return (
        
        

        <>
            <form onSubmit={handleSubmit}>
                <VStack spacing='20px'>
                    <HStack>
                        <FormControl isRequired >
                            <FormLabel color="black">Name</FormLabel>
                            <Input color="black" type='text'></Input>
                            <FormErrorMessage>Name is required</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="black">Email</FormLabel>
                            <Input color="black" type='email'></Input>
                            <FormErrorMessage>AAAAAA</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <FormControl isRequired>
                        <FormLabel  color="black">Choose date</FormLabel>
                        <Input onChange={(e) => {
                            fetchAPI()
                            setDate(e.target.value)
                        }} color="black" type='date' value={date} required/>
                    </FormControl>
                    
                    <FormControl isRequired>
                        <FormLabel color="black">Choose time</FormLabel>
                        <Select color="black" placeholder='Choose time' required>
                            {times.map(e => 
                                <option 
                                disabled={!avlbTimes.includes(e)}
                                >{e}
                                </option>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel color="black">Number of guests</FormLabel>
                        <NumberInput onChange={e => setGuests(e)} color="black" value={guests} min={1} max={10} required>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    
                    <FormControl isRequired>

                        <FormLabel color="black">Occasion</FormLabel>
                        <Select onChange={e => setOccasion(e.target.value)} color="black" placeholder='Choose occasion' required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Other</option>
                        </Select>
                    </FormControl>

                    <Button
                        type='submit'
                        isLoading={false}
                        loadingText='Submitting'
                        colorScheme='teal'
                        variant='outline'
                    >
                        {loading ? <CircularProgress isIndeterminate size={10} color="#512DA8" capIsRound/> : "Make your reservation"}
                    </Button>
                </VStack>

            </form>
           
            
            {isSubmitted ? < ConfirmBooking message={message}/> : <></>}
        </>
            
        

    )
}

export default BookingForm;