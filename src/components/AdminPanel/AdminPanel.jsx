import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PanelNavBar from "./PanelNavBar/PanelNavBar";
import PanelMain from "./PanelMain/PanelMain";
import NoPermission from "../NoPermission/NoPermission";
import { useAuth0 } from "@auth0/auth0-react";

const AdminPanel = () =>{
    const { user, isLoading, isAuthenticated } = useAuth0();

    if (isAuthenticated && !isLoading && user["https://prodevteam-spis.com/authorization"].groups.includes("Admin")){
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
    }else{
        return(
            <NoPermission/>
        )
    }
}

export default AdminPanel;