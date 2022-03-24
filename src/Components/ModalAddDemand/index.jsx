import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { DemandsContext } from "../../Providers/Demands";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalAddDemand = ({ isAddDemandOpen, onAddDemandClose }) => {
  const { addDemand } = useContext(DemandsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token")) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || []
  );

  const handleAddDemand = (data) => {
    addDemand(data, user.user.id, token);
    onAddDemandClose();
  };

  return (
    <>
      <Modal isOpen={isAddDemandOpen} onClose={onAddDemandClose}>
        <ModalOverlay />
        <ModalContent bg="#141155">
          <ModalHeader
            bg="#00A5AE"
            borderTopLeftRadius="5px"
            borderTopRightRadius="5px"
          >
            Demanda
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              h="250px"
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
              <form onSubmit={handleSubmit(handleAddDemand)}>
                <FormControl>
                  <Box>
                    <FormLabel
                      fontFamily="Open Sans, sans-serif"
                      fontStyle="normal"
                      fontSize="12px"
                      lineHeight="22px"
                      color="#00A5AE"
                    >
                      Nome do dono/responsável:
                    </FormLabel>
                    <Box bg="#c5e8fb" w="300px" borderRadius="30px">
                      <Input
                        name="name"
                        {...register("name")}
                        variant="outline"
                        placeholder="Digite aqui o nome"
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                    <Text fontSize="10px" color="red">
                      {errors.name?.message}
                    </Text>
                    <FormLabel
                      fontFamily="Open Sans, sans-serif"
                      fontStyle="normal"
                      fontSize="12px"
                      lineHeight="22px"
                      color="#00A5AE"
                    >
                      Descrição da demanda:
                    </FormLabel>
                    <Box bg="#c5e8fb" w="300px" borderRadius="30px">
                      <Input
                        name="description"
                        {...register("description")}
                        variant="outline"
                        placeholder="Digite qual a demanda"
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                    <Text fontSize="10px" color="red">
                      {errors.description?.message}
                    </Text>
                    <FormLabel
                      fontFamily="Open Sans, sans-serif"
                      fontStyle="normal"
                      fontSize="12px"
                      lineHeight="22px"
                      color="#00A5AE"
                    >
                      Status da demanda:
                    </FormLabel>
                    <Box bg="#c5e8fb" w="300px" borderRadius="30px">
                      <Select
                        name="status"
                        {...register("status")}
                        variant="outline"
                        placeholder="Status da Demanda"
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      >
                        <option value="inProgress">Em andamento</option>
                        <option value="completed">Concluída</option>
                      </Select>
                    </Box>
                  </Box>
                  <Box
                    h="40px"
                    d="flex"
                    w="100%"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Button type="submit">Criar demanda</Button>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddDemand;