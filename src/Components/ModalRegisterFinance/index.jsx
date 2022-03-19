import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalRegisterFinance = ({ isOpen, onClose, handleRegisterFinance }) => {
  //const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    value: yup.number().required("Campo obrigatório"),
  });

  //const { register, handleSubmit } = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(handleSchema) });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#141155">
          <ModalHeader
            bg="#00A5AE"
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
          >
            Modal Title
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              h="300px"
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#00A5AE",
                  borderRadius: "24px",
                },
              }}
              overflowY="scroll"
            >
              <Form onSubmit={handleSubmit(handleRegisterFinance)}>
                <input
                  type="text"
                  placeholder="Descrição"
                  {...register("name")}
                />
                {errors.name?.message && <p>{errors.name?.message}</p>}
                <input
                  type="number"
                  placeholder="Valor   $"
                  {...register("value")}
                />
                {errors.value?.message && <p>{errors.value?.message}</p>}
                <label>
                  Categoria
                  <select {...register("status")}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                  </select>
                </label>

                <button type="submit">Registrar finança</button>
              </Form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRegisterFinance;
