import { Box, Stack } from "@chakra-ui/react";
import Statistics from "./Statistics/Statistics";
import React, { useState } from "react";
import PanelNavBar from "./PanelNavBar/PanelNavBar";
import EditView from "./EditView/EditView";

const AdminPanel = () => {
  return (
    <Stack height="100vh" width="100vw">
      <Box height="15%" width="100%">
        <PanelNavBar />
      </Box>
      <Box height="85%" width="100%">
        {/* <Statistics/> */}
      </Box>
    </Stack>
  );
};

export default AdminPanel;
