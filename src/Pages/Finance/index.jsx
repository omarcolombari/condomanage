import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, BoxButtons, StyledHeader } from "./styles";
import ListFinances from "../../Components/ListFinances";
import { Heading } from "@chakra-ui/react";
import { FinancesContext } from "../../Providers/Finances";
import Header from "../../Components/Header";
import ModalRegisterFinance from "../../Components/ModalRegisterFinance";

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const { register, handleSubmit } = useForm();
  //supondo que dá pra capturar o token do localStorage
  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc2OTQxODYsImV4cCI6MTY0NzY5Nzc4Niwic3ViIjoiMiJ9.6UxrqN0_obg47yu3oMFV5S123qBHlK8ohRzDGJ8k3Ks";

  //Pegar o Id do usuário
  const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));

  //Pegando o array e os métodos do Providers
  const { finances, showFinances, addFinance } = useContext(FinancesContext);
  //Esse state é para poder filtrar também
  const [newFinances, setNewFinances] = useState([]);

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
    addFinance(2, token, data);
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

        <ListFinances finances={newFinances} />

        <ModalRegisterFinance
          isOpen={isOpen}
          onClose={onClose}
          handleRegisterFinance={handleRegisterFinance}
        />
      </Box>
    </Box>
  );
};

export default Finance;
