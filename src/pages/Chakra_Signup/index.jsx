import { Box } from "@chakra-ui/react";
import background from "../../assets/background.png";
import ContainerSignup from "../../Components/Container_Signup";

const ChakraSignupPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgImg={background}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <ContainerSignup/>
    </Box>
  );
};

export default ChakraSignupPage;