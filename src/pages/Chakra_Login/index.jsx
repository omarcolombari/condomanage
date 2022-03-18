import { Box } from "@chakra-ui/react";
import background from "../../assets/background.png";
import ContainerLogin from "../../Components/Container_Login";

const ChakraLoginPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgImg={background}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <ContainerLogin />
    </Box>
  );
};

export default ChakraLoginPage;
