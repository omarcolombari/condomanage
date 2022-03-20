import { useDisclosure, Heading, Button, Box } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { BoxButtons, StyledHeader } from "./styles";
import ListFinances from "../../Components/ListFinances";
import { FinancesContext } from "../../Providers/Finances";
import Header from "../../Components/Header";
import ModalFinance from "../../Components/ModalFinance";

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc4MDc2MzIsImV4cCI6MTY0NzgxMTIzMiwic3ViIjoiMiJ9.Z5HnGM4QEWeJqaeItlFwzLIaTqhY2xXKh0aBbmy_U0U";

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
    <Box display="flex" flexDirection="column" gap="20px">
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
        <StyledHeader>
          <Heading fontSize={["20px", "25px", "30px"]}>
            Lista de finanças
          </Heading>
          <Button
            onClick={onOpen}
            variant="default"
            borderRadius="100%"
            bg="#141155"
            title="Adicionar finança"
          >
            +
          </Button>
        </StyledHeader>
        <BoxButtons>
          <Button onClick={() => filterFinances("Todos")}>Todos</Button>
          <Button onClick={() => filterFinances("Entrada")}>Entradas</Button>
          <Button onClick={() => filterFinances("Despesa")}>Despesas</Button>
        </BoxButtons>

        {newFinances.length < finances.length ? (
          <ListFinances finances={newFinances} />
        ) : (
          <ListFinances finances={finances} />
        )}

        <ModalFinance
          isOpen={isOpen}
          onClose={onClose}
          handleChange={handleRegisterFinance}
          title="Registrar finança"
        />
      </Box>
    </Box>
  );
};

export default Finance;
