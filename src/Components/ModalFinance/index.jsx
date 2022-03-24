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
import { useContext, useState } from "react";
import { FinancesContext } from "../../Providers/Finances";

const ModalFinance = ({
  isOpen,
  onClose,
  handleChange,
  title,
  onAddFinanceClose,
  loadFinances,
  item = { name: "", value: "" },
}) => {
  const handleSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    value: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9 ]+$/, "O campo deve conter apenas números"),
  });
  const { addFinance } = useContext(FinancesContext);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token")) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(handleSchema) });

  const handleRegisterFinance = (data) => {
    if (item.name !== "") {
      handleChange(data, item.id, user.user.id, token);
    } else {
      addFinance(data, user.user.id, token);
      loadFinances();
      onAddFinanceClose();
      reset();
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#141155" w="90%" height="80vh">
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
              <Form onSubmit={handleSubmit(handleRegisterFinance)}>
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="Descrição"
                  defaultValue={item.name}
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p color="red">{errors.name?.message}</p>
                )}
                <label>Valor</label>
                <input
                  type="text"
                  placeholder="Valor (R$)"
                  defaultValue={item.value}
                  {...register("value")}
                />
                {errors.value?.message && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errors.value?.message}
                  </p>
                )}
                <label>Categoria</label>
                <select defaultValue={item.status} {...register("status")}>
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
