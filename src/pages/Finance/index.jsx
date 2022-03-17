import FormFinance from "../../components/FormFinance";
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

const Finance = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  const { register, handleSubmit } = useForm();

  const handleRegisterFinance = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Lista de finanças</h1>
      <Button
        onClick={onOpen}
        color="white"
        bg="#141155"
        borderRadius="100%"
        w="50px"
        h="50px"
        fontSize="40px"
        fontWeight="bold"
      >
        +
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          w="400px"
          h="400px"
          bg="#141155"
          color="white"
          m="0 auto"
          borderRadius="10px"
        >
          <ModalHeader>Cadastrar finança</ModalHeader>
          <ModalCloseButton w="50px" alignSelf="flex-end" />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(handleRegisterFinance)}>
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
                  <option value="Entrada de valor">Entrada de valor</option>
                  <option value="Despesa">Despesa</option>
                </select>
                <button type="submit">Inserir</button>
              </label>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Finance;
