import React from "react";
import { Box, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as ReachLink } from "react-router-dom";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={2} display="block">
    {children}
  </Text>
);

const PanelNavBar = (props) => {
  const { logout } = useAuth0();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow((oldState) => !oldState);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <Button bg="transparent" border="1px">
            <Link as={ReachLink} to="/admin/citizenslist">
              Lista osób
            </Link>
          </Button>
        </MenuItems>
        <MenuItems>
          <Button bg="transparent" border="1px">
              <Link as={ReachLink} to="/form">
                Formularz
              </Link>
          </Button>
        </MenuItems>
        <MenuItems>
          <Button bg="transparent" border="1px">
              <Link as={ReachLink} to="/admin/statistics">
                Statystyki
              </Link>
          </Button>
        </MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          bg="transparent"
          border="1px"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Wyloguj
        </Button>
      </Box>
    </Flex>
  );
};

export default PanelNavBar;
