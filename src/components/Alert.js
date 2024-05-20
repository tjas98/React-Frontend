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

  import React, { useEffect, useState } from "react";

  import { useRef } from "react";
  

  function Alert(props) {

    

    const { onOpen, onClose } = useDisclosure()
    const [isOpen, setOpen] = useState(props.isOpen)
    const [message, setMessage] = useState(props.message)
    
    const cancelRef = React.useRef()



    useEffect(() => {
        setMessage(props.message)
        setOpen(props.isOpen)
        
    }, [props])

    return (
        <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{message}</AlertDialogHeader>
          
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => {
                setOpen(false)
                setMessage("")
                }}>
              Close
            </Button>
            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  export default Alert;
  