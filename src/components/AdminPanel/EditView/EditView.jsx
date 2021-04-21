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

const EditView = (props) => { 

    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    const data = {
        first_name: "john",
        surname: "Kowalski",
        sex: "M",
        PESEL: "0000000000",
        date_of_birth: "2020-01-01",
        marital_status: "KAWALER",
        education: "ŚREDNIE",
        home_address: {
          street: "Polna",
          postal_code: "80-000",
          city: "Gdansk",
          district: "Gdansk",
          commune: "Gdansk",
          voivodeship: "Pomorskie",
          country: "Polska",
        },
        registered_address: {
          street: "Polna",
          postal_code: "80-000",
          city: "Gdansk",
          district: "Gdansk",
          commune: "Gdansk",
          voivodeship: "Pomorskie",
          country: "Polska",
        },
        company: [
          {
            name: "Renault",
            NIP: "999012030213",
            contract: [
              {
                type: "UOP",
                income: 30000,
                currency: "PLN",
              },
            ],
          },
        ],
        family: [
          {
            type: "PARTNER",
            PESEL: "0000000000",
            date_of_birth: "2020-01-01",
            sex: "K",
          },
          {
            type: "DZIECKO",
            PESEL: "0000000000",
            date_of_birth: "2020-01-01",
            sex: "M",
          },
        ],
        accomodation: {
          with_parents: true,
          num_of_residents: 3,
          house_type: "BLOK",
        },
        additional_info: {
          internet_access: true,
          family_income: 90000,
          num_of_cars_in_family: 2,
        },
      };

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
                bg="teal"
            >
            <Box
                color="white"
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="1.1em"
                textAlign="center"
                width="100%"
            >Edycja Danych</Box>
                
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
                    {objectToArray(data).map((elem) => elementCheck(elem[0], elem[1]))}
                </Box>
                <Box>
                    <Button colorScheme="teal">
                      <Link 
                      as={ReachLink}
                      to="/form"
                      props={data}
                      >Edytuj</Link>
                    </Button>
                    
                    <Button colorScheme="teal" onClick={() => setIsOpen(true)}>Usuń</Button>
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