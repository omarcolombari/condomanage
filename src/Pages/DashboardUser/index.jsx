import { Box } from "@chakra-ui/react"
import { Redirect } from "react-router-dom";
import Dashboard from "../../Components/Dashboard";
import Header from "../../Components/Header";

const DashboardUser = ({ authenticaded,setAuthenticaded }) => {
    
    if(!authenticaded){
        return <Redirect to="/login"/>
    }
    return (
        <Box
        w="100vw"
        h="100vh"
        d="flex"
        flexDir="column"
        alignItems="center">
            <Box
            w="100%"
            mb="10px">
                <Header setAuthenticaded={setAuthenticaded}/>
            </Box>
            <Dashboard authenticaded={authenticaded}/>
        </Box>
    )
}

export default DashboardUser;
