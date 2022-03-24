import { Box } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import background from "../../Assets/Images/background.png";
import ContainerSignup from "../../Components/HomePage_components/Signup_components/Container_Signup";

const SignupPage = ({authenticaded,setAuthenticaded}) => {
  if(authenticaded){
    return <Redirect to="/dashboard"/>
  }

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