import React, { useRef, useState } from "react";
import {
  Box,
  IconButton,
  Button,
  Tabs,
  TabPanels,
  TabPanel,
  Center,
  Spacer,
  Image,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import PersonalData from "./forms/PersonalData";
import { Formik, Form as FormikForm } from "formik";
import AdditionalPersonalData from "./forms/AdditionalPersonalData";
import { dateOfBirthMatchesPESEL, sexMatchesPESEL } from "./helpers/validators";
import HomeAddress from "./forms/Address";
import RegisteredAddress from "./forms/RegisteredAddress";
import Work from "./forms/Work";
import Family from "./forms/Family";
import Accomodation from "./forms/Accomodation";
import AdditionalInfo from "./forms/AdditionalInfo";
import CheckData from "./forms/CheckData";
import { FormStrings } from "../../constants/strings";
import { useAuth0 } from "@auth0/auth0-react";

const formsSections = [
  "Dane osobowe",
  "Dodatkowe dane personalne",
  "Adres zamieszkania",
  "Adres zameldowania",
  "Zatrudnienie",
  "Rodzina",
  "Zakwaterowanie",
  "Dodatkowe informacje",
  "Potwierdź dane",
];
const formComponents = [
  PersonalData,
  AdditionalPersonalData,
  HomeAddress,
  RegisteredAddress,
  Work,
  Family,
  Accomodation,
  AdditionalInfo,
  CheckData,
];

const Form = () => {
  const [formIndex, setFormIndex] = useState(0);
  const maxIndex = formsSections.length - 1;

  const goToNextPage = () => setFormIndex(addOneToIndex);
  const goToPreviousPage = () => setFormIndex(subtractOneFromIndex);

  const formikRef = useRef();

  const isPreviousDisabled = formIndex === 0;
  const isNextDisabled = formIndex === maxIndex;

  const GUSLogo =
    "https://spis.gov.pl/wp-content/uploads/2021/01/cropped-logo-nsp.png";

  const { logout } = useAuth0();

  return (
    <Center height="100vh" width="100vw" overflow="hidden" bg="gray.100">
      <Box position="absolute" top="20px" right="20px">
        <Button onClick={() => logout({ returnTo: window.location.origin })} bg="gray.300">
          Wyloguj się
        </Button>
      </Box>
      <Box
        boxShadow="xl"
        width="100%"
        maxW={{ base: "90vw", md: "min(70vw, 600px)", xl: "min(50vw, 600px)" }}
        minH="80vh"
        maxH="80vh"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        d="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        zIndex="1"
      >
        <Box
          position="absolute"
          transform="translateX(-80%) rotate(-90deg) translateX(-80%)"
        >
          <Image
            objectFit="cover"
            src={GUSLogo}
            alt="GUS Logo"
            width="300px"
            filter="grayscale(100%) opacity(30%)"
          />
        </Box>
        <Box
          boxShadow="md"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="2"
          paddingX="5"
          bg="teal"
        >
          <IconButton
            aria-label="Previous page"
            size="md"
            onClick={goToPreviousPage}
            disabled={isPreviousDisabled}
            icon={<ArrowBackIcon />}
          />
          <Box
            color="white"
            fontWeight="semibold"
            letterSpacing="wide"
            textTransform="uppercase"
            fontSize="1.1em"
            textAlign="center"
          >
            {formsSections[formIndex]}
          </Box>
          <IconButton
            aria-label="Next page"
            onClick={goToNextPage}
            disabled={isNextDisabled}
            icon={<ArrowForwardIcon />}
          />
        </Box>
        <Box overflowY="auto">
          <Formik
            initialValues={{}}
            validate={(values) => {
              const errors = {};
              errors.sex = sexMatchesPESEL("Płeć nie pasuje do numeru PESEL")(
                values.sex,
                values.PESEL
              );
              errors.date_of_birth = dateOfBirthMatchesPESEL(
                "Data urodzenia nie pasuje do numeru PESEL"
              )(values.date_of_birth, values.PESEL);
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ handleSubmit, values }) => {
              if (formikRef.current === undefined) {
                formikRef.current = handleSubmit;
              }
              return (
                <FormikForm>
                  <Tabs index={formIndex}>
                    <TabPanels>
                      {formComponents.map((component, index) => (
                        <TabPanel key={component.name}>
                          {component(values)}
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </FormikForm>
              );
            }}
          </Formik>
        </Box>
        <Spacer />
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="2"
          borderTop="1px"
          borderColor="gray.100"
        >
          <CircularProgress value={calculateProgress(formIndex)} color="teal">
            <CircularProgressLabel>{`${calculateProgress(formIndex).toFixed(
              0
            )}%`}</CircularProgressLabel>
          </CircularProgress>
          <Button
            colorScheme="teal"
            aria-label="Next page"
            onClick={isNextDisabled ? () => formikRef.current() : goToNextPage}
            icon={<ArrowForwardIcon />}
          >
            {isNextDisabled
              ? FormStrings.sendButtonText
              : FormStrings.nextButtonText}
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

const calculateProgress = (currentIndex) =>
  (currentIndex / (formsSections.length - 1)) * 100;

const addOneToIndex = (index) => restrainIndex(index + 1);
const subtractOneFromIndex = (index) => restrainIndex(index - 1);

const restrainIndex = (index) => {
  if (index > formsSections.length) return formsSections.length;
  if (index < 0) return 0;
  return index;
};

export default Form;
