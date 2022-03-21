import { Box } from "@chakra-ui/react";
import background from "../../assets/background.png";
import ContainerLogin from "../../Components/Container_Login";

const ChakraLoginPage = ({authenticaded,setAuthenticaded}) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgImg={background}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <ContainerLogin authenticaded={authenticaded} setAuthenticaded={setAuthenticaded}/>
    </Box>
  );
};

export default ChakraLoginPage;
