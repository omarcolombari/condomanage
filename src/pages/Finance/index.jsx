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
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Box, Form, BoxButtons } from "./styles";
import ListFinances from "../../components/ListFinances";
import { useFinances } from "../../providers/Finance";
import { api } from "../../services/api";
import { Heading } from "@chakra-ui/react";

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const { register, handleSubmit } = useForm();

  const { newFinances, addFinance } = useFinances();

  const handleRegisterFinance = (data) => {
    const userId = 1; //trocar pelo id resgatado no login
    const newData = { ...data, userId };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc1Njk0MjQsImV4cCI6MTY0NzU3MzAyNCwic3ViIjoiMSJ9.A8Dpb7NF2qF2CygQIvz_LGXIakUyEnb87KRj7DiMoPs";

    api
      .post("/finances", newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        addFinance(data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterEntries = () => {};

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
          <Button>Todos</Button>
          <Button>Entradas</Button>
          <Button>Despesas</Button>
        </BoxButtons>
        <ListFinances />
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
