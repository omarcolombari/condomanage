import { Box, Button, Img, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Logo1 from "../../assets/modelo-3.png"

const LandingPageContainer = () => {
    const history = useHistory();

    const handleNavigation = (path) => {
      return history.push(path);
    };

    return (
        <Box
            w={["100vw","50vw","45vw"]}
            h="100vh"
            bg={["#c5e8fb","#ffffff"]}
            d="flex"
            justifyContent="center"
            alignItems="center">
            <Box
                w="95%"
                h="98%"
                d="flex"
                flexDir="column"
                justifyContent="space-evenly"
                alignItems="center">
                <Img 
                    w={["214px","276px","350px"]}
                    src={Logo1} 
                    alt="logo_1"/>
                <Text w="80%" variant="text1" fontSize={["24px"]}>
                    Smart Tool visada para facilitar o trabalho de gestores decondominios com agilidade, segurança e práticidade
                </Text>
                <Box
                    w="100%"
                    d="flex"
                    justifyContent="space-around">
                    <Button 
                        w={["100px","120px","150px"]} 
                        variant="default"
                        onClick={()=>handleNavigation("/login")}>Login</Button>
                    <Button 
                        w={["100px","120px","150px"]} 
                        variant="default"
                        onClick={()=>handleNavigation("/signup")}>Cadastrar</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPageContainer;