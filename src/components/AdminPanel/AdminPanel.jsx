import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import PanelNavBar from "./PanelNavBar/PanelNavBar";
import PanelMain from "./PanelMain/PanelMain";
import NoPermission from "../NoPermission/NoPermission";
import { useAuth0 } from "@auth0/auth0-react";

const AdminPanel = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (
    isAuthenticated &&
    !isLoading &&
    user["https://prodevteam-spis.com/authorization"].groups.includes("Admin")
  ) {
    return (
      <Stack width="100vw" height="100vh">
        <Box
          height="64px"
          width="100%"
          bg="teal.500"
          display="flex"
          alignItems="center"
        >
          <PanelNavBar />
        </Box>
        <Box style={{ marginTop: "0" }} height="100%" width="100%">
          <PanelMain />
        </Box>
      </Stack>
    );
  } else {
    return <NoPermission />;
  }
};
export default AdminPanel;
