import { useDisclosure, Heading, Button, Box } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { BoxButtons, StyledHeader } from "./styles";
import ListFinances from "../../Components/ListFinances";
import { FinancesContext } from "../../Providers/Finances";
import Header from "../../Components/Header";
import ModalFinance from "../../Components/ModalFinance";
import HeaderPage from "../../Components/HeaderPageVar";

const Finance = () => {
  const { isOpen:isAddFinanceOpen, onOpen:onAddFinanceOpen, onClose:onAddFinanceClose } = useDisclosure();

  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc4MjQwMzIsImV4cCI6MTY0NzgyNzYzMiwic3ViIjoiMiJ9.scKztgOXybQTlrYtd6NUwLYKEaPQIrXeLC-Y_Lj14iQ";

  //Pegar o Id do usuário
  //const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
  //const userId = user.id
  const userId = 2;

  //Pegando o array e os métodos do Providers
  const { finances, showFinances, addFinance } = useContext(FinancesContext);

  //Esse state é para poder filtrar também
  const [newFinances, setNewFinances] = useState([...finances]);

  const loadFinances = async () => {
    await showFinances(token);
  };

  useEffect(() => {
    loadFinances();
    if (finances.length > 0) {
      setNewFinances([...finances]);
    }
  }, [finances.length]);

  const handleRegisterFinance = (data) => {
    addFinance(userId, token, data);
    loadFinances();
  };

  const filterFinances = (status) => {
    if (status === "Todos") {
      setNewFinances([...finances]);
    } else {
      const filtered = finances.filter((finance) => finance.status === status);
      setNewFinances([...filtered]);
    }
  };

  return (
    <Box 
      w="100vw"
      h="100vh"
      d="flex"
      flexDir="column"
      alignItems="center"
    >
      <Box
        w="100%"
        mb="10px"
      >
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
          justifyContent="space-between"
          alignItems="center"
          gap="12px"
        >
          <HeaderPage 
            onOpen={onAddFinanceOpen}
            titulo="Lista de finanças"
          />

          <Box
            w="100%"
            d="flex"
            flexDir="row"
            justifyContent="space-around"
          >
            <Button variant="default" onClick={() => filterFinances("Todos")}>Todos</Button>
            <Button variant="default" onClick={() => filterFinances("Entrada")}>Entradas</Button>
            <Button variant="default" onClick={() => filterFinances("Despesa")}>Despesas</Button>
          </Box>

          {newFinances.length < finances.length ? (
            <ListFinances finances={newFinances} />
          ) : (
            <ListFinances finances={finances} />
          )}

          <ModalFinance
            isOpen={isAddFinanceOpen}
            onClose={onAddFinanceClose}
            handleChange={handleRegisterFinance}
            title="Registrar finança"
          />
        </Box> 
      </Box>
    </Box>
  );
};

export default Finance;
