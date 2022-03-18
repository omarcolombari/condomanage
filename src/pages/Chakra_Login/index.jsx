import { Box, Slide, useDisclosure } from "@chakra-ui/react";
import background from "../../assets/background.png";
import ContainerLogin from "../../Components/Container_Login";
console.log("background ", background);

const ChakraLandingPage = () => {
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

export default ChakraLandingPage;
