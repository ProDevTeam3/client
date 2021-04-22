import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import PanelNavBar from "./PanelNavBar/PanelNavBar";
import PanelMain from "./PanelMain/PanelMain";

const AdminPanel = () =>{
    return(
        <Stack width="100vw">
            <Box height="12vh" width="100%">
                <PanelNavBar/>
            </Box>
            <Box style={{marginTop:"0"}} height="88vh" width="100%">
                <PanelMain/>
            </Box>
        </Stack>
    )
}
export default AdminPanel;
