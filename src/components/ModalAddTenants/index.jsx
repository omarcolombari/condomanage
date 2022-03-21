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
  Text,
  Select,
  FormControl,
} from "@chakra-ui/react";
import Inputs from "../Input";

const ModalAddTenants = ({
  register,
  handleAddTenants,
  handleSubmit,
  setStatusHome,
  isAddOpen,
  onAddClose,
  errors,
}) => {
  return (
    <Modal isOpen={isAddOpen} onClose={onAddClose}>
      <ModalOverlay />
      <ModalContent bg="#141155">
        <ModalHeader
          bg="#00A5AE"
          borderTopLeftRadius="5px"
          borderTopRightRadius="5px"
        >
          Adicionar Inquilino
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            h={["75%"]}
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
            <form onSubmit={handleSubmit(handleAddTenants)} display="flex">
              <FormControl display="flex" flexDir="column">
                <Text color="white">Digite o e-mail</Text>
                <Inputs
                  register={register}
                  registerData="email"
                  ph="Digite o e-mail"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="text"
                  name="email"
                />

                <Text color="white">Digite a senha</Text>
                <Inputs
                  register={register}
                  registerData="password"
                  ph="Digite a senha"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="password"
                  name="password"
                />

                <Text color="white">Digite o número do imóvel</Text>
                <Inputs
                  register={register}
                  registerData="number"
                  ph="Digite o número do imóvel"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="number"
                  name="number"
                />

                <Text color="white">Digite o nome do responsável</Text>
                <Inputs
                  register={register}
                  registerData="responsible"
                  ph="Digite o nome do responsável"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="text"
                  name="responsible"
                ></Inputs>

                <Text color="white">Digite o CPF</Text>
                <Inputs
                  register={register}
                  registerData="cpf"
                  ph="Digite o número do CPF"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="number"
                  name="cpf"
                ></Inputs>

                <Text color="white">Digite o valor</Text>
                <Inputs
                  register={register}
                  registerData="value"
                  ph="Valor do condomínio"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="number"
                  name="value"
                ></Inputs>

                <Text color="white">Selecione o status do imóvel</Text>
                <Select
                  bgColor="#00A5AE"
                  w="95%"
                  {...register("status")}
                  name="status"
                  onChange={(e) => setStatusHome(e.target.value)}
                >
                  <option defaultValue="selected" value="selecione">
                    Vago
                  </option>
                  <option value="comprado">Comprado</option>
                  <option value="alugado">Alugado</option>
                </Select>
                <ModalFooter display="flex" justifyContent={["center"]}>
                  <Box
                    padding="30px"
                    width="100%"
                    display="flex"
                    flexDir={["column", "row"]}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Button
                      colorScheme="blue"
                      mr={["", "10px"]}
                      mb={["10px", "0"]}
                      onClick={onAddClose}
                      width="188px"
                    >
                      Fechar
                    </Button>
                    <Button type="submit" variant="default" width="188px">
                      Cadastrar usuário
                    </Button>
                  </Box>
                </ModalFooter>
              </FormControl>
            </form>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddTenants;
