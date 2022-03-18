import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Form, BoxButtons } from "./styles";
import ListFinances from "../../components/ListFinances";
import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { FinancesContext } from "../../providers/Finance";

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const { register, handleSubmit } = useForm();
  //supondo que dá pra capturar o token do localStorage
  const token = JSON.parse(localStorage.getItem("@CondoManage:token"));

  //Pegar o Id do usuário
  const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));

  //Pegando o array e o método do Provider
  const { finances, showFinances, addFinance } = useContext(FinancesContext);

  //Esse state é para poder filtrar também
  const [newFinances, setNewFinances] = useState([...finances]);

  //envolver em useEffect monitadora pelo array finances
  showFinances(token);

  const handleRegisterFinance = (data) => {
    addFinance(user.id, token, data);
  };

  const filterFinances = (status) => {
    if (status === "Todos") {
      setNewFinances([...finances]);
    } else {
      const filtered = newFinances.filter(
        (finance) => finance.status === status
      );
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
    <div>
      <Box>
        <header>
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
        </header>
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
    </div>
  );
};

export default Finance;
