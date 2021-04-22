import React from "react";
import { Center, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NoPermission = () => {
  return (
    <Center
      bg="gray.100"
      height="100vh"
      width="100vw"
      d="flex"
      flexDir="column"
    >
      <Box fontSize="3em" fontWeight="600" color="gray.500">
        Brak wymaganych uprawnień!
      </Box>
      <Link to="/login">
        <Button
          color="white"
          marginTop="4em"
          bg="teal.400"
          _hover={{ bg: "teal.500" }}
        >
          Powrót do strony logowania
        </Button>
      </Link>
    </Center>
  );
};

export default NoPermission;
