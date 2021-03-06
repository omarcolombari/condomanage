import { Box, ScaleFade, useDisclosure } from "@chakra-ui/react";
import background from "../../Assets/Images/background.png";
import LandingPageContainer from "../../Components/HomePage_components/Landing_components";
import { Redirect } from "react-router-dom";

const LandingPage = ({ authenticaded }) => {
  const { onOpen } = useDisclosure();

  if (authenticaded) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ScaleFade
      in={onOpen}
      initialScale={1}
      animate={{ opacity: [0, 1] }}
      style={{ zIndex: 10 }}
    >
      <Box
        w="100vw"
        h="100vh"
        bgImg={background}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <LandingPageContainer />
      </Box>
    </ScaleFade>
  );
};

export default LandingPage;
