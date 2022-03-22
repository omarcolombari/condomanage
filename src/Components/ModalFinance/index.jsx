import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalFinance = ({
  isOpen,
  onClose,
  handleChange,
  title,
  data = { name: "", value: "" },
}) => {
  const handleSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    value: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9 ]+$/, "O campo deve conter apenas números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(handleSchema) });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#141155" w="90%">
          <ModalHeader
            bg="#00A5AE"
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
          >
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              h="300px"
              display="flex"
              justifyContent="center"
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
              <Form onSubmit={handleSubmit(handleChange)}>
                <input
                  type="text"
                  placeholder="Descrição"
                  defaultValue={data.name}
                  {...register("name")}
                />
                {errors.name?.message && <p>{errors.name?.message}</p>}
                <input
                  type="text"
                  placeholder="Valor   $"
                  defaultValue={data.value}
                  {...register("value")}
                />
                {errors.value?.message && <p>{errors.value?.message}</p>}
                <label>
                  Categoria
                  <select defaultValue={data.status} {...register("status")}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                  </select>
                </label>

                <Button type="submit">Enviar</Button>
              </Form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalFinance;
