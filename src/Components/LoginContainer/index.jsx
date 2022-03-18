import { Box } from "@chakra-ui/react";
import LoginHeader from "../../Components/LoginHeader";
import LoginForm from "../LoginForm";

const LoginContainer = () => {
    return (
        <Box
            w={["100vw","50vw","45vw"]}
            h="100vh"
            bg="#c5e8fb"
            d="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center">
            <Box>
                <LoginHeader/>
            </Box>
            <Box
            mt="30px">
                <LoginForm/>
            </Box>
        </Box>
    )
}

export default LoginContainer;