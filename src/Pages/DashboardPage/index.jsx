import { Box, Slide, useDisclosure } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import ContainerDashboard from "../../Components/Dashboard_components/Container_Dashboard";
import Header from "../../Components/Header_components/Header";

const DashboardPage = ({ authenticaded, setAuthenticaded }) => {
  const { onOpen } = useDisclosure();

  if (!authenticaded) {
    return <Redirect to="/login" />;
  }

  return (
    <Slide in={onOpen} direction="left">
      <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
        <Box w="100%" mb="10px">
          <Header setAuthenticaded={setAuthenticaded} />
        </Box>
        <ContainerDashboard authenticaded={authenticaded} />
      </Box>
    </Slide>
  );
};

export default DashboardPage;
