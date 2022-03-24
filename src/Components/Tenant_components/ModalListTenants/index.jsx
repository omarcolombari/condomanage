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
  Heading,
  FormHelperText,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

const ModalListTenants = ({
  isOpenAlterTenants,
  onCloseAlterTenants,
  handleSubmit,
  register,
  setStatusHome,
  handleChangeTenants,
  currentTenants,
}) => {
  return (
    <Modal isOpen={isOpenAlterTenants} onClose={onCloseAlterTenants}>
      <ModalOverlay />
      <ModalContent h={["90%", "80%"]} bg="#141155">
        <ModalHeader
          bg="#00A5AE"
          borderTopLeftRadius="5px"
          borderTopRightRadius="5px"
        >
          <Heading variant="title1" fontSize="23px">
            Alterar inquilino
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            h="65vh"
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
            <form onSubmit={handleSubmit(handleChangeTenants)}>
              <FormControl>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o e-mail</Text>
                  <FormHelperText
                    variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px"
                  >
                    
                  </FormHelperText>
                </Box>

                <Editable
                  focusBorderColor="transparent"
                  _placeholder={{ opacity: 1, color: "white" }}
                  bgColor="#00A5AE"
                  defaultValue={currentTenants.email}
                  variant="outline"
                  w="95%"
                  h="40px"
                  borderRadius="5px"
                  margin={["15px 0", "15px 0"]}
                >
                  <EditablePreview padding="10px" />
                  <EditableInput
                    borderRadius="5px"
                    bgColor="#00A5AE"
                    h="40px"
                    {...register("email")}
                  />
                </Editable>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite a senha</Text>
                  <FormHelperText
                    variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px"
                  >
                    
                  </FormHelperText>
                </Box>

                <Editable
                  _placeholder={{ opacity: 1, color: "white" }}
                  bgColor="#00A5AE"
                  defaultValue={currentTenants.password}
                  variant="outline"
                  w="95%"
                  h="40px"
                  borderRadius="5px"
                  margin={["15px 0", "15px 0"]}
                >
                  <EditablePreview padding="10px" />
                  <EditableInput
                    borderRadius="5px"
                    bgColor="#00A5AE"
                    h="40px"
                    {...register("password")}
                  />
                </Editable>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o número do imóvel</Text>
                  <FormHelperText
                    variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px"
                  >
                    
                  </FormHelperText>
                </Box>

                <Editable
                  _placeholder={{ opacity: 1, color: "white" }}
                  bgColor="#00A5AE"
                  defaultValue={currentTenants.number}
                  variant="outline"
                  w="95%"
                  h="40px"
                  borderRadius="5px"
                  margin={["15px 0", "15px 0"]}
                >
                  <EditablePreview padding="10px" />
                  <EditableInput
                    borderRadius="5px"
                    bgColor="#00A5AE"
                    h="40px"
                    {...register("number")}
                  />
                </Editable>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o nome do responsável</Text>
                  <FormHelperText
                    variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px"
                  >
                    
                  </FormHelperText>
                </Box>
                <Editable
                  _placeholder={{ opacity: 1, color: "white" }}
                  bgColor="#00A5AE"
                  defaultValue={currentTenants.responsible}
                  variant="outline"
                  w="95%"
                  h="40px"
                  borderRadius="5px"
                  margin={["15px 0", "15px 0"]}
                >
                  <EditablePreview padding="10px" />
                  <EditableInput
                    borderRadius="5px"
                    bgColor="#00A5AE"
                    h="40px"
                    {...register("responsible")}
                  />
                </Editable>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o CPF</Text>
                  <FormHelperText
                    variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px"
                  >
                    
                  </FormHelperText>
                </Box>

                <Editable
                  _placeholder={{ opacity: 1, color: "white" }}
                  bgColor="#00A5AE"
                  defaultValue={currentTenants.cpf}
                  variant="outline"
                  w="95%"
                  h="40px"
                  borderRadius="5px"
                  margin={["15px 0", "15px 0"]}
                >
                  <EditablePreview padding="10px" />
                  <EditableInput
                    borderRadius="5px"
                    bgColor="#00A5AE"
                    h="40px"
                    {...register("cpf")}
                  />
                </Editable>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="white">Digite o valor</Text>
                  <FormHelperText
                    variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px"
                  >
                    
                  </FormHelperText>
                </Box>

                <Editable
                  _placeholder={{ opacity: 1, color: "white" }}
                  bgColor="#00A5AE"
                  defaultValue={currentTenants.value}
                  variant="outline"
                  w="95%"
                  h="40px"
                  borderRadius="5px"
                  margin={["15px 0", "15px 0"]}
                >
                  <EditablePreview padding="10px" />
                  <EditableInput
                    borderRadius="5px"
                    bgColor="#00A5AE"
                    h="40px"
                    {...register("value")}
                  />
                </Editable>

                <Text color="white">Selecione o status do imóvel</Text>
                <Select
                  bgColor="#00A5AE"
                  w="95%"
                  {...register("status")}
                  name="status"
                  onChange={(e) => setStatusHome(e.target.value)}
                >
                  <option value="Vago">selecione</option>
                  <option value="Vago">Vago</option>
                  <option value="comprado">Comprado</option>
                  <option value="alugado">Alugado</option>
                </Select>

                <ModalFooter display="flex" justifyContent="space-around">
                  <Box padding={["25px", "30px"]}>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={onCloseAlterTenants}
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

export default ModalListTenants;