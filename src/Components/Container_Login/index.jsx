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
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Inputs from "../Inputs";
import LoginHeader from "../LoginHeader";
import { Redirect } from "react-router-dom";

const ContainerLogin = ({authenticaded,setAuthenticaded}) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
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
      .post("/login", data)
      .then((response) => {
        const { accessToken } = response.data;
        const { user } = response.data;
        localStorage.setItem("@CondoManage:token", JSON.stringify(accessToken));
        localStorage.setItem("@CondoManage:infos", JSON.stringify({ user }));
        toast.success("Login realizado com sucesso!");
        setAuthenticaded(true);
      })
      .catch((err) => toast.error("E-mail ou senha inválidos"));
  };

  const { onOpen } = useDisclosure();

  if(authenticaded){
    return <Redirect to="/dashboard"/>
  }

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
        <LoginHeader />
        <Box
          w={["100%"]}
          d="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDir="column"
        >
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormControl w={["290px", " ", "350px"]}>
              <Box>
                <FormLabel>
                  <Heading variant="title3" fontSize="20px">
                    E-mail
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="email"
                  ph="Digite seu e-mail"
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
              <Box>
                <FormLabel>
                  <Heading variant="title3" fontSize="20px" marginTop="15px">
                    Senha
                  </Heading>
                </FormLabel>
                <Inputs
                  register={register}
                  bgColor={"#ffffff"}
                  phColor={"#00a5ae"}
                  registerData="password"
                  type="password"
                  ph="Digita sua senha"
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
                Logar
              </Button>
            </FormControl>
          </form>
          <Text fontSize={13}>
            Ainda não tem cadastro?{" "}
            <Link
              style={{ color: "#005d89", fontWeight: "700" }}
              onClick={() => handleNavigation("/signup")}
            >
              Clique aqui
            </Link>
          </Text>
        </Box>
      </Box>
    </Slide>
  );
};

export default ContainerLogin;