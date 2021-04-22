import { Box, Center, Button } from "@chakra-ui/react"
import React, { useState, useEffect } from "react";
import CheckData from "../../Form/forms/CheckData"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from "@chakra-ui/react"

import { objectToArray, elementCheck } from "../../Form/helpers/summaryHelpers";
import { Link } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom"

const EditView = ({data}) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    const imie = data ? data.first_name : "Imie"
    const nazwisko = data ? data.surname : "Nazwisko"
    const daneObywatela = data ? (objectToArray(data).map((elem) => 
      elementCheck(elem[0], elem  [1]))) : "";
    
    return (
        <Center height="100vh" width="100vw" overflow="hidden" bg="gray.100" paddingTop="10">
        <Box
            boxShadow="xl"
            width="100%"
            maxW={{ base: "90vw", md: "min(70vw, 600px)", xl: "min(50vw, 600px)" }}
            minH="80vh"
            maxH="80vh"
            borderWidth="1px"
            borderRadius="lg"
            overflow="scroll"
            d="flex"
            flexDirection="column"
            justifyContent="space-between"
            bg="white"
            zIndex="1">
            <Box
                boxShadow="md"
                d="flex"
                alignItems="center"
                justifyContent="space-between"
                padding="2"
                paddingX="5"
                bg="teal.500"
            >
            <Box
                color="white"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="1.1em"
                textAlign="center"
                width="100%"
            >{imie} {nazwisko}</Box>
                
            </Box>
            <Box
                color="black"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="1.1em"
                textAlign="center"
                >
            
                <Box>
                    {/* <CheckData/> */}
                    {daneObywatela}
                </Box>
                <Box>
                    <Button colorScheme="teal"
                    margin="20px 20px">
                      <Link 
                      as={ReachLink}
                      to="/form"
                      data={data}
                      >Edytuj</Link>
                    </Button>
                    
                    <Button colorScheme="red" onClick={() => setIsOpen(true)}
                    margin="20px 20px">Usuń</Button>
                </Box>
                
            </Box>
        </Box>

        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isCentered={true}
        >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Usuń dane
            </AlertDialogHeader>

            <AlertDialogBody>
              Czy jesteś pewny? Spowoduje to trwałe usunięcie obywatela z bazy.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Anuluj
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Usuń
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        
        
            
    </Center>     
    )
}

export default EditView;