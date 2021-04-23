import { Center, Spinner, Stack, Text, Skeleton } from "@chakra-ui/react";
import React from "react";

const Authenticating = () => {
  return (
    <Center width="100vw" height="100vh">
      <Stack spacing="6" alignItems="center">
        <Spinner
          size="xl"
          color="teal"
          thickness="4px"
          speed="0.8s"
          emptyColor="gray.100"
        />
        <Text fontSize="2xl">Uwierzytelnianie...</Text>
        <Stack width="300px">
          <Skeleton height="20px" startColor="teal.400" endColor="blue.400" />
          <Skeleton height="20px" startColor="blue.400" endColor="purple.400" />
          <Skeleton height="20px" startColor="purple.400" endColor="cyan.400" />
        </Stack>
      </Stack>
    </Center>
  );
};
export default Authenticating;
