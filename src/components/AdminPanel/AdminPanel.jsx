import { Box, Stack } from "@chakra-ui/react"
import React from "react";
import PanelNavBar from "./PanelNavBar/PanelNavBar";
import Statistics from "./Statistics/Statistics"
import EditView from "./EditView/EditView";
import CitizensList from "./CitizenList/CitizensList";

const AdminPanel = () =>{
    return(
        <Stack height="100vh" width="100vw">
            <Box height="15%" width="100%">
                <PanelNavBar/>
            </Box>
            <Box  height="85%" width="100%">
                {/* <Statistics/> */}
                {/* <CitizensList/> */}
                {/* <EditView/> */}
            </Box>
        </Stack>
    )
}

export default AdminPanel