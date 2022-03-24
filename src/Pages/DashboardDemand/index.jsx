import {
  Box,
  Button,
  filter,
  Heading,
  Input,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../../Components/Feats/Header";
import React, { useEffect, useState, useContext } from "react";
import { DemandsContext } from "../../Providers/Demands";
import ModalAddDemand from "../../Components/ModalAddDemand";
import CartDemand from "../../Components/CartDemand";
import HeaderPage from "../../Components/HeaderPageDemand";
import { Redirect } from "react-router-dom";

const DashboardDemand = ({ authenticaded, setAuthenticaded }) => {
  const { demands, showDemands } = useContext(DemandsContext);
  const {
    isOpen: isAddDemandOpen,
    onOpen: onAddDemandOpen,
    onClose: onAddDemandClose,
  } = useDisclosure();
  const { onOpen: onUpdateDemandOpen } = useDisclosure();
  const { onOpen: onContainerDemandOpen } = useDisclosure();

  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token")) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || []
  );

  const [filterBase, setFilterBase] = useState("Todas");

  const loadDemands = async () => {
    await showDemands(token, user.user.id);
  };

  useEffect(() => {
    loadDemands();
  }, [demands.length]);

  if (!authenticaded) {
    return <Redirect to="/login" />;
  }

  return (
    <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
      <Slide style={{ zIndex: 10 }} direction="left" in={onContainerDemandOpen}>
        <Box w="100%" mb="10px">
          <Header setAuthenticaded={setAuthenticaded} />
          <Box
            w="90%"
            maxW="1300px"
            h={["77vh"]}
            borderRadius="10px"
            boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)"
            d="flex"
            flexDir="column"
            alignItems="center"
            ml="auto"
            mr="auto"
            mt="20px"
          >
            <Box w="100%">
              <HeaderPage onOpen={onAddDemandOpen} titulo="Lista de demandas" />
              <Box
                w="100%"
                d="flex"
                flexDir={["column", "", "row"]}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Button
                  variant="default"
                  mt={["5px", "", "15px"]}
                  w={["95%", "70%", "100px"]}
                  onClick={() => setFilterBase("Todas")}
                >
                  Todas
                </Button>
                <Button
                  variant="default"
                  mt={["5px", "", "15px"]}
                  w={["95%", "70%", "150px"]}
                  onClick={() => setFilterBase("inProgress")}
                >
                  Em andamento
                </Button>
                <Button
                  variant="default"
                  mt={["5px", "", "15px"]}
                  w={["95%", "70%", "120px"]}
                  onClick={() => setFilterBase("completed")}
                >
                  Concluídas
                </Button>
              </Box>
            </Box>

            <Box
              w={["95%", "70%", "90%"]}
              borderRadius="4px"
              h={["32vh", "", "50vh"]}
              overflow="auto"
              mt="10px"
              d="flex"
              flexDir="column"
              gap="15px"
            >
              {demands
                .filter(({ status }) =>
                  filterBase === "Todas"
                    ? status !== "Todas"
                    : status === filterBase
                )
                .map((item) => (
                  <CartDemand key={item.id} item={item} />
                ))}
            </Box>
            <Box>
              <ModalAddDemand
                isAddDemandOpen={isAddDemandOpen}
                onAddDemandClose={onAddDemandClose}
              />
            </Box>
          </Box>{" "}
          {/*aqui*/}
        </Box>
      </Slide>
    </Box>
  );
};

export default DashboardDemand;
