import { Box } from "@chakra-ui/react";
import background from "../../Assets/Images/background.png";
import ContainerLogin from "../../Components/HomePage_components/Login_components/Container_Login"

const LoginPage = ({authenticaded,setAuthenticaded}) => {
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

export default LoginPage;
