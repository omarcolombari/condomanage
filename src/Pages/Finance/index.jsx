import {
  useDisclosure,
  Heading,
  Button,
  Box,
  Slide,
  Icon,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { FinancesContext } from "../../Providers/Finances";
import Header from "../../Components/Feats/Header";
import ModalFinance from "../../Components/ModalFinance";
import HeaderPage from "../../Components/HeaderPageVar";
import TotalFinances from "../../Components/TotalFinances";
import FinanceCard from "../../Components/FinanceCard";
import { IoMdCash } from "react-icons/io";

const Finance = () => {
  const { onOpen: onContainerOpen } = useDisclosure();
  const {
    isOpen: isAddFinanceOpen,
    onOpen: onAddFinanceOpen,
    onClose: onAddFinanceClose,
  } = useDisclosure();
  const [filterFin, setFilterFin] = useState("Todos");

  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY0Nzk3NTU1NiwiZXhwIjoxNjQ3OTc5MTU2LCJzdWIiOiI0In0.9etUpB-DzRjWKwlbMt2vqqeTiBG04Ym2Qm62dFz6Wr4";

  //Pegar o Id do usuário
  //const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
  //const userId = user.id
  const userId = 4;

  //Pegando o array e os métodos do Providers
  const { finances, showFinances, addFinance } = useContext(FinancesContext);

  //Esse state é para poder filtrar também
  //const [newFinances, setNewFinances] = useState([...finances]);

  const loadFinances = async () => {
    await showFinances(token, userId);
  };

  useEffect(() => {
    loadFinances();
  }, [finances]);

  const handleRegisterFinance = (data) => {
    addFinance(userId, token, data);
    loadFinances();
  };

  return (
    <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
      <Slide in={onContainerOpen} style={{ zIndex: 10 }} direction="left">
        <Box w="100%" mb="10px">
          <Header />
          <Box
            w="90%"
            maxW="779.73px"
            margin="0 auto"
            h="77vh"
            borderRadius="10px"
            boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="20px"
          >
            <Box w="100%">
              <HeaderPage
                onOpen={onAddFinanceOpen}
                titulo="Lista de finanças"
              />
              <Box
                w="100%"
                d="flex"
                flexDir={["column-reverse", "", "row"]}
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Button
                  variant="default"
                  mt={["5px", "", "0px"]}
                  w={["95%", "70%", "100px"]}
                  onClick={() => setFilterFin("Todos")}
                >
                  Todos
                </Button>
                <Button
                  variant="default"
                  mt={["5px", "", "0px"]}
                  w={["95%", "70%", "100px"]}
                  onClick={() => setFilterFin("Entrada")}
                >
                  Entradas
                </Button>
                <Button
                  variant="default"
                  mt={["5px", "", "0px"]}
                  w={["95%", "70%", "100px"]}
                  onClick={() => setFilterFin("Despesa")}
                >
                  Despesas
                </Button>
                <TotalFinances
                  d={finances.length > 0 ? "block" : "none"}
                  finances={finances}
                />
              </Box>
            </Box>
            <Box
              w={["95%", "70%", "90%"]}
              borderRadius="4px"
              h={["32vh", "", "50vh"]}
              overflow="auto"
              mt="10px"
              display="flex"
              flexDirection="column"
              gap="15px"
            >
              {finances.length > 0 ? (
                finances
                  .filter(({ status }) =>
                    filterFin === "Todos"
                      ? status !== "Todos"
                      : status === filterFin
                  )
                  .map((item, index) => <FinanceCard item={item} key={index} />)
              ) : (
                <Box
                  h="100%"
                  w="100%"
                  d="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Heading
                    variant="title3"
                    fontSize={["16px", "28px"]}
                    d="flex"
                    flexDir="column"
                    alignItems="center"
                  >
                    sem despesas no momento
                    <IoMdCash />
                  </Heading>
                </Box>
              )}
            </Box>
            <ModalFinance
              isOpen={isAddFinanceOpen}
              onClose={onAddFinanceClose}
              handleChange={handleRegisterFinance}
              title="Registrar finança"
            />
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default Finance;
