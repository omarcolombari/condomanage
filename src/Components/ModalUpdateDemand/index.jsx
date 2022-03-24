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
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { DemandsContext } from "../../Providers/Demands";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalUpdateDemand = ({
  isUpdateDemandOpen,
  onUpdateDemandClose,
  item,
}) => {
  const { changeDemand } = useContext(DemandsContext);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token")) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || []
  );

  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleUpdateDemand = (data) => {
    changeDemand(data, item.id, user.user.id, token);
    onUpdateDemandClose();
  };

  return (
    <>
      <Modal isOpen={isUpdateDemandOpen} onClose={onUpdateDemandClose}>
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
            <Box h="fit-content">
              <form onSubmit={handleSubmit(handleUpdateDemand)}>
                <FormControl>
                  <Box>
                    <FormLabel
                      fontFamily="Open Sans, sans-serif"
                      fontStyle="normal"
                      fontSize="13px"
                      lineHeight="22px"
                      color="#FFF"
                    >
                      Nome do dono/responsável:
                    </FormLabel>
                    <Box bg="#00a5ae" w="95%" borderRadius="30px">
                      <Input
                        name="name"
                        value={item.name}
                        readOnly
                        variant="outline"
                        placeholder="Digite aqui o nome"
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#FFF" }}
                      />
                    </Box>
                    <FormLabel
                      fontFamily="Open Sans, sans-serif"
                      fontStyle="normal"
                      fontSize="13px"
                      lineHeight="22px"
                      color="#FFF"
                    >
                      Descrição da demanda:
                    </FormLabel>
                    <Box bg="#00a5ae" w="95%" borderRadius="30px">
                      <Input
                        name="description"
                        readOnly
                        value={item.description}
                        variant="outline"
                        placeholder="Digite qual a demanda"
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#FFF" }}
                      />
                    </Box>
                    <FormLabel
                      fontFamily="Open Sans, sans-serif"
                      fontStyle="normal"
                      fontSize="13px"
                      lineHeight="22px"
                      color="#FFF"
                    >
                      Status da demanda:
                    </FormLabel>
                    <Box bg="#00a5ae" w="95%" borderRadius="10px">
                      <Select
                        name="status"
                        {...register("status")}
                        variant="outline"
                        placeholder="Status da Demanda"
                        focusBorderColor="transparent"
                        borderRadius="10px"
                        _placeholder={{ opacity: 1, color: "#FFF" }}
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
                    mt="15px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      backgroundColor="#00a5ae"
                      color="#FFF"
                      type="submit"
                    >
                      Atualizar demanda
                    </Button>
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

export default ModalUpdateDemand;
