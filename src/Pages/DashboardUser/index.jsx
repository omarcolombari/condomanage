import { Box } from "@chakra-ui/react"
import Dashboard from "../../Components/Dashboard";
import Header from "../../Components/Header"

const DashboardUser = () => {
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
                <Header />
            </Box>
            <Dashboard />
        </Box>
    )
}

export default DashboardUser;