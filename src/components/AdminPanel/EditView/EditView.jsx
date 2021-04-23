import { Box, Center, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CheckData from "../../Form/forms/CheckData";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast
} from "@chakra-ui/react";

import { objectToArray, elementCheck } from "../../Form/helpers/summaryHelpers";
import { Link } from "@chakra-ui/react";
import { Link as ReachLink, useLocation, useHistory } from "react-router-dom";

import { getCitizen } from "../../../requests/citizensList";
import { delCitizen } from "../../../requests/citizen";

const EditView = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [citizen, citizenUpd] = useState(undefined);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  const imie = data ? data.first_name : "Imie";
  const nazwisko = data ? data.surname : "Nazwisko";
  const daneObywatela = data
    ? objectToArray(data).map((elem) => elementCheck(elem[0], elem[1]))
    : "";

  const handleSuccess = () => {
    onClose();
    toast({
      title: "Obywatel został pomyślnie usunięty z bazy",
      duration: 5000,
      status: "success",
      isClosable: true,
    });
    history.push("/admin/citizenslist");
  };

  const handleError = (error) => {
    onClose();
    toast({
      title: "Obywatel nie został usunięty z bazy",
      description: `Wystąpił problem: ${error?.response?.data}`,
      duration: 30000,
      status: "error",
      isClosable: true,
    });
  };

  const getCitByPesel = async (pesel) => {
    const data = await getCitizen(pesel);

    if (data !== `Nie znaleziono obywatela o PESELU: ${pesel}` && data) {
      citizenUpd(data);
    } else {
      citizenUpd(undefined);
    }
  };

  let history = useHistory();

  const location = useLocation();

  const pesel = location.pathname.split("/")[3];

  if (!citizen && pesel && !isNaN(pesel) && pesel.length === 11) {
    getCitByPesel(pesel);
  }

  return (
    <Center minH="100%" maxH="100%" overflow="hidden" bg="gray.100">
      <Box
        boxShadow="xl"
        width="100%"
        maxW={{ base: "90vw", md: "min(70vw, 600px)", xl: "min(50vw, 600px)" }}
        minH="80vh"
        maxH="80vh"
        borderWidth="1px"
        borderRadius="lg"
        overflow="none"
        d="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        zIndex="1"
      >
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="2"
          paddingX="5"
          bg="teal"
          height="10vh"
          borderTopRadius="lg"
        >
          <Box
            color={citizen ? "white" : "teal"}
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
            fontSize="1.1em"
            textAlign="center"
            width="100%"
          >
            {citizen ? citizen.first_name + " " + citizen.surname : "|"}
          </Box>
        </Box>
        <Box
          color="black"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="1.1em"
          textAlign="center"
          height="70vh"
        >
          <Box height="57vh" overflowY="auto" padding="2vh 2vw">
            {citizen ? (
              <CheckData formikRef={{ current: { values: citizen } }} />
            ) : (
              "Nie znaleziono obywatela"
            )}
          </Box>
          <Center height="13vh">
            {citizen ? (
              <Box>
                <Link as={ReachLink} to={`/edit/${pesel}`} data={data}>
                  <Button colorScheme="teal" margin="20px 20px">
                    Edytuj
                  </Button>
                </Link>
                <Button
                  colorScheme="red"
                  onClick={() => setIsOpen(true)}
                  margin="20px 20px"
                >
                  Usuń
                </Button>
              </Box>
            ) : (
              <Box></Box>
            )}
          </Center>
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
              <Button
                colorScheme="red"
                onClick={async (e) => {
                  if (
                    (await delCitizen(citizen.PESEL)) ===
                    `Usunięto obywatela o PESELU: ${citizen.PESEL}`
                  ) {
                    handleSuccess();
                  } else {
                    handleError();
                  }
                }}
                ml={3}
              >
                Usuń
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Center>
  );
};

export default EditView;
