import React from "react"
import { Box, Heading, Flex, Text, Button, Link, useMediaQuery, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as ReachLink, useHistory } from "react-router-dom";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={2} display="block">
    {children}
  </Text>
);

const PanelNavBar = (props) => {
  const { logout } = useAuth0();
  const [show, setShow] = React.useState(false);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const history = useHistory();
  return isLargerThan900 ?
    (<Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingLeft="30px"
      paddingRight="30px"
      bg="teal.500"
      height="100%"
      width="100%"
    >
      <Box
        display={{ sm: "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <Link
            as={ReachLink}
            to="/admin/citizenslist"
            style={{ textDecoration: "none" }}
          >
            <Button colorScheme="gray">
              Lista osób
            </Button>
          </Link>
        </MenuItems>
        <MenuItems>
          <Link as={ReachLink} to="/form" style={{ textDecoration: "none" }}>
            <Button colorScheme="gray">
              Formularz
            </Button>
          </Link>
        </MenuItems>
        <MenuItems>
          <Link
            as={ReachLink}
            to="/admin/statistics"
            style={{ textDecoration: "none" }}
          >
            <Button colorScheme="gray">
              Statystyki
            </Button>
          </Link>
        </MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          colorScheme="gray"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Wyloguj
        </Button>
      </Box>
    </Flex >)
    : (<Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        colorScheme="gray"
        marginLeft="30px"
      />
      <MenuList zIndex={1000}>
        <MenuItem onClick={() => history.push("/admin/citizenslist")}>
          Lista osób
      </MenuItem>
        <MenuItem onClick={() => history.push("/form")}>
          Formularz
      </MenuItem>
        <MenuItem onClick={() => history.push("/admin/statistics")}>
          Statystyki
      </MenuItem>
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
          Wyloguj
      </MenuItem>
      </MenuList>
    </Menu>);
};

export default PanelNavBar;
