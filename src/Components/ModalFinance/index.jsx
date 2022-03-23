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
        <ModalContent bg="#141155" w="90%" height="65vh">
          <ModalHeader
            bg="#00A5AE"
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
          >
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box h="350px" display="flex" justifyContent="center" height="55vh">
              <Form onSubmit={handleSubmit(handleChange)}>
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="Descrição"
                  defaultValue={data.name}
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p color="red">{errors.name?.message}</p>
                )}
                <label>Valor</label>
                <input
                  type="text"
                  placeholder="Valor (R$)"
                  defaultValue={data.value}
                  {...register("value")}
                />
                {errors.value?.message && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.value?.message}
                  </p>
                )}
                <label>Categoria</label>
                <select defaultValue={data.status} {...register("status")}>
                  <option value="Entrada">Entrada</option>
                  <option value="Despesa">Despesa</option>
                </select>

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
