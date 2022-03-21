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
  FormHelperText,
} from "@chakra-ui/react";
import Inputs from "../Tenants-Input";

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
          Adicionar inquilino
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
            <form onSubmit={handleSubmit(handleAddTenants)}>
              <FormControl>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o e-mail</Text>
                </Box>
                <Inputs
                  ph="Digite o email"
                  register={register}
                  registerData="email"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="text"
                  name="email"
                />
                <FormHelperText
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700px"
                >
                  {errors.email?.message}
                </FormHelperText>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite a senha</Text>
                </Box>
                <Inputs
                  ph="Digite a senha"
                  register={register}
                  registerData="password"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="password"
                  name="password"
                />
                <FormHelperText
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700px"
                >
                  {errors.password?.message}
                </FormHelperText>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o número do imóvel</Text>
                </Box>
                <Inputs
                  ph="Digite o número do imóvel"
                  register={register}
                  registerData="number"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="number"
                  name="number"
                />
                <FormHelperText
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700px"
                >
                  {errors.number?.message}
                </FormHelperText>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o nome do responsável</Text>
                </Box>
                <Inputs
                  ph="Digite o nome do responsavel"
                  register={register}
                  registerData="responsible"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="text"
                  name="responsible"
                />
                <FormHelperText
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700px"
                >
                  {errors.responsible?.message}
                </FormHelperText>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o CPF</Text>
                </Box>
                <Inputs
                  ph="Digite o numero do CPF"
                  register={register}
                  registerData="cpf"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="number"
                  name="cpf"
                />
                <FormHelperText
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700px"
                >
                  {errors.cpf?.message}
                </FormHelperText>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o valor</Text>
                </Box>
                <Inputs
                  ph="Valor do condominio"
                  register={register}
                  registerData="value"
                  bgColor="#00A5AE"
                  phColor="white"
                  type="number"
                  name="value"
                />
                <FormHelperText
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700px"
                >
                  {errors.cpf?.message}
                </FormHelperText>

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
                <ModalFooter
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Box
                    padding={["25px", "30px"]}
                    display="flex"
                    flexDir={["column", "", "row"]}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      type="reset"
                      colorScheme="blue"
                      onClick={onAddClose}
                      mb={["5px", "", "0"]}
                      mr={["0", "", "15px"]}
                    >
                      Fechar
                    </Button>
                    <Button type="submit" variant="default">
                      Alterar usuário
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
