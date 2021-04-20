import { Box, Stack } from "@chakra-ui/react"
import React from "react";

const AdminPanel = () =>{
    return(
        <Stack height="100vh" width="100vw">
            <Box height="15%" width="100%">
                {/*PanelNavBar*/}
            </Box>
            <Box  height="85%" width="100%">
                {/*PanelMain*/}
            </Box>
        </Stack>
    )
}

export default AdminPanel