import { Box } from "@chakra-ui/react";
import background from "../../Assets/Images/background.png";
import ContainerSignup from "../../Components/HomePage_components/Signup_components/Container_Signup";

const SignupPage = () => {

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

export default SignupPage;