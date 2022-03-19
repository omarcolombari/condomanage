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

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const { register, handleSubmit } = useForm();
  //supondo que dá pra capturar o token do localStorage
  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc2NDc1ODksImV4cCI6MTY0NzY1MTE4OSwic3ViIjoiMiJ9.UkeAPnuNXID5jZl_AC_KTyMKLd8Xmemz5xMBhGaggvc";

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

  //const { newFinances, addFinance } = useFinances();
  //const [finances, setFinances] = useState([...newFinances]);

  //const {finances} = useContext(FinancesContext);

  /*const handleRegisterFinance = (data) => {
    //método addFinances do Provider

    const userId = 2; //trocar pelo id resgatado no login
    const newData = { ...data, userId };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc2MDMwNTksImV4cCI6MTY0NzYwNjY1OSwic3ViIjoiMiJ9.rHFAjjRT_E8T8isBP4Sez4piIaX6mD-WJsQU95CBWe4";

    api
      .post("/finances", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        addFinance(data);
        setFinances([...finances, data]);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/

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

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
            w="80%"
            maxW="400px"
            h="400px"
            bg="#141155"
            color="white"
            m="0 auto"
            borderRadius="10px"
            mt="40px"
            alignSelf="center"
          >
            <ModalHeader
              w="100%"
              display="flex"
              justifyContent="space-around"
              padding="10px 0px 10px 0px"
              bg="#00A5AE"
              borderRadius="10px"
            >
              Cadastrar finança
              <ModalCloseButton
                w="50px"
                bgColor="transparent"
                color="white"
                border="transparent"
              />
            </ModalHeader>

            <ModalBody pb={6}>
              <Form onSubmit={handleSubmit(handleRegisterFinance)}>
                <input
                  type="text"
                  placeholder="Descrição"
                  {...register("name")}
                />
                <input
                  type="number"
                  placeholder="Valor   $"
                  {...register("value")}
                />
                <label>
                  Categoria
                  <select {...register("status")}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                  </select>
                  <button type="submit">Inserir</button>
                </label>
              </Form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Finance;
