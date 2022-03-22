import { Box, Button, Img, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Logo1 from "../../../Assets/Images/modelo-3.png";

const LandingPageContainer = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Box
      w={["100vw", "100vw", "350px", "550px"]}
      h="100vh"
      bg={["#c5e8fb", "#c5e8fb", "#ffffff"]}
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={["95%", "80%", "80%"]}
        h="98%"
        d="flex"
        flexDir="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Img w={["276px", "276px", "350px"]} src={Logo1} alt="logo_1" />
        <Text
          w={["100%", "90%"]}
          fontWeight="400"
          maxW="355px"
          variant="text1"
          fontSize={["18px"]}
        >
          Smart Tool visada para facilitar o trabalho de gestores de condomínios
          com agilidade, segurança e praticidade
        </Text>
        <Box
          w="100%"
          maxW={["", "", "", "355px"]}
          d="flex"
          justifyContent="space-around"
          flexDir={["column", "column", "column", "row"]}
          alignItems="center"
        >
          <Button
            w={["90%", "90%", "90%", "170px"]}
            maxW={["355px", "355px", "355px", "325px"]}
            marginBottom={["20px", "20px", "20px", "0"]}
            borderRadius="30px"
            variant="default"
            fontSize="20px"
            onClick={() => handleNavigation("/login")}
          >
            Login
          </Button>
          <Button
            w={["90%", "90%", "90%", "170px"]}
            maxW={["355px", "355px", "355px", "325px"]}
            borderRadius="30px"
            variant="default"
            fontSize="20px"
            onClick={() => handleNavigation("/signup")}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPageContainer;