import { Box, Button, FormControl, FormLabel, Heading,Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Inputs from "../Inputs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const LoginForm = () => {
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
            console.log(response.data);
            const { accessToken } = response.data;
            const { user } = response.data;
            toast.success("Login realizado com sucesso!");
            localStorage.setItem("@CondoManage:token", JSON.stringify(accessToken));
            localStorage.setItem("@CondoManage:infos", JSON.stringify({ user }));
          })
          .catch((err) => toast.error("E-mail ou senha inválidos"));
    };

    return (
        <Box
            w={["97vw","47vw","40vw"]}
            d="flex"
            alignItems="center"
            justifyContent="space-around"
            ml={["5px","8px","2vw"]}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <FormControl
                w={["280px","220px","300px"]}>
                    <Box>
                        <FormLabel><Heading variant="title3" fontSize="20px">Email</Heading></FormLabel>
                        <Inputs 
                        register={register} 
                        bgColor={"#ffffff"} 
                        phColor={"#00a5ae"}
                        registerData="email"
                        ph="Digite seu email"/>
                        <Text variant="text1" color="red">{errors.email?.message}</Text>
                    </Box>
                    <Box>
                        <FormLabel><Heading variant="title3" fontSize="20px">Senha</Heading></FormLabel>
                        <Inputs 
                        register={register} 
                        bgColor={"#ffffff"} 
                        phColor={"#00a5ae"}
                        registerData="password"
                        ph="Digita sua senha"/>
                        <Text variant="text1" color="red">{errors.password?.message}</Text>
                    </Box>
                    <Button mt="30px" type="submit">teste</Button>
                </FormControl>
            </form>
        </Box>
    )
}

export default LoginForm;