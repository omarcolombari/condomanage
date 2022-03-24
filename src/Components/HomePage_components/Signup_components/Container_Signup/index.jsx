import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Slide, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inputs from "../../../Feats/Inputs";
import SignupHeader from "../SignupHeader";

const ContainerSignup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Nome do condomínio obrigatório"),
    cnpj: yup
      .string()
      .required("CNPJ obrigatório")
      .min(14, "CNPJ deve conter 14 dígitos")
      .max(14, "CNPJ deve conter 14 dígitos"),
    apartments: yup.string().required("Número de apartamentos obrigatório"),
    valueBase: yup.string().required("Valor obrigatório"),
    address: yup.string().required("Endereço obrigatório"),
    complement: yup.string().required("Tipo obrigatório"),
    adm: yup.string().required("Nome obrigatório"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .min(11, "CPF deve conter 11 dígitos")
      .max(11, "CPF deve conter 11 dígitos"),

    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "Os e-mails devem ser iguais"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const handleFormSubmit = (data) => {
    api
      .post("/register", data)
      .then((response) => {
        toast.success("Cadastro realizado com sucesso!");
        history.push("/login");
      })
      .catch((err) => toast.error("Oops... esse e-mail já está cadastrado"));
  };

  const { onOpen } = useDisclosure();

  return (
    <Slide in={onOpen} style={{ zIndex: 10 }} direction="left">
      <Box
        w={["100vw", "100vw", "50%"]}
        maxW={["100vw", "", "550px"]}
        h="100vh"
        bg={["#daedf3", "#daedf3", "#ffffff"]}
        d="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <SignupHeader />
        <Box
          w={["100%"]}
          d="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDir="column"
          overflowX="auto"
        >
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormControl w={["290px", " ", "350px"]} h={["400px"]}>
              <Box name="name">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px">
                    Nome do condomínio*
                  </Heading>
                </FormLabel>
                <Inputs
                  id="name"
                  type="text"
                  register={register}
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="name"
                  ph="Digite o nome do condomínio"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.name?.message}
                </Text>
              </Box>
              <Box name="cnpj">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    CNPJ*
                  </Heading>
                </FormLabel>
                <Inputs
                  type="number"
                  id="cnpj"
                  register={register}
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="cnpj"
                  ph="Digite o CNPJ - apenas números"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.cnpj?.message}
                </Text>
              </Box>
              <Box name="apartments">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Nº de apartamentos/salas*
                  </Heading>
                </FormLabel>
                <Inputs
                  type="number"
                  id="apartments"
                  register={register}
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="apartments"
                  ph="Número de apartamentos/salas"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.apartments?.message}
                </Text>
              </Box>
              <Box name="valueBase">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Valor condomínio*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="valueBase"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="valueBase"
                  type="number"
                  ph="Digite o valor do condomínio/mensal"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.valueBase?.message}
                </Text>
              </Box>
              <Box name="address">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Endereço*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="address"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="address"
                  type="text"
                  ph="Digite o endereço e número"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.address?.message}
                </Text>
              </Box>
              <Box name="complement">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Tipo de condominio*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="complement"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="complement"
                  type="text"
                  ph="Residencial, comercial, etc"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.complement?.message}
                </Text>
              </Box>
              <Box name="adm">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Responsável*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="adm"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="adm"
                  type="text"
                  ph="Nome do responsável/síndico"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.adm?.message}
                </Text>
              </Box>
              <Box name="cpf">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    CPF do Responsável*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="cpf"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="cpf"
                  type="number"
                  ph="CPF do responsável - apenas números"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.cpf?.message}
                </Text>
              </Box>
              <Box name="email">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    E-mail do Responsável*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="email"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="email"
                  type="email"
                  ph="E-mail do responsável"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.email?.message}
                </Text>
              </Box>
              <Box name="confirmEmail">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Confirmar e-mail*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="confirmEmail"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="confirmEmail"
                  type="email"
                  ph="Confirme seu e-mail"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.confirmEmail?.message}
                </Text>
              </Box>
              <Box name="password">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Senha*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="password"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="password"
                  type="password"
                  ph="Digite uma senha"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.password?.message}
                </Text>
              </Box>
              <Box name="confirmPassword">
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Confirmar senha*
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  id="confirmPassword"
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="confirmPassword"
                  type="password"
                  ph="Confirme sua senha"
                />
                <Text
                  variant="text1"
                  color="red"
                  fontSize="12px"
                  fontWeight="700"
                >
                  {errors.confirmPassword?.message}
                </Text>
              </Box>
              <Button
                mt="30px"
                type="submit"
                w={["100%"]}
                maxW={["355px"]}
                marginBottom={["20px"]}
                borderRadius="30px"
                variant="default"
                fontSize="20px"
                fontWeight="600"
                border="none"
              >
                Cadastrar
              </Button>
              <Text fontSize={12} textAlign="center" fontWeight="700">
                * Campos obrigatórios
              </Text>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Slide>
  );
};

export default ContainerSignup;
