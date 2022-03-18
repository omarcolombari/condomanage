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
import { Box, Form } from "./styles";
import ListFinances from "../../components/ListFinances";
import { useFinances } from "../../providers/Finance";
import { api } from "../../services/api";

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const { register, handleSubmit } = useForm();

  const { addFinance } = useFinances();

  const handleRegisterFinance = (data) => {
    const userId = 8; //trocar pelo id resgatado no login
    const newData = { ...data, userId };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc1NTkwMTQsImV4cCI6MTY0NzU2MjYxNCwic3ViIjoiOCJ9.BHuHDIT0WBmhWr05Zuk98TFLG1kCI2_5LvmDqhYjz3Q";

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

  return (
    <div>
      <Box>
        <header>
          <h1>Lista de finanças</h1>
          <Button onClick={onOpen} variant="default">
            +
          </Button>
        </header>

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
