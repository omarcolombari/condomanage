import {
  Container,
  ContainerButton,
  ContainerContent,
  ContainerForm,
  ContainerHeader,
} from "./style";
import { MdOutlineArrowBack } from "react-icons/md";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
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
    console.log(data)
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
    <Container>
      <ContainerContent>
        <ContainerHeader>
          <h1>CondoManage</h1>
          <MdOutlineArrowBack onClick={() => handleNavigation("/")} />
        </ContainerHeader>
        <ContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="container-input">
            <span>E-mail</span>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <span className="error">{errors.email?.message}</span>
          </div>
          <div className="container-input">
            <span>Senha</span>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <span className="error">{errors.password?.message}</span>
          </div>
          <ContainerButton>
            <button type="submit">Login</button>
          </ContainerButton>
        </ContainerForm>
        <div>
          Ainda não tem cadastro? <Link to="/signup">Clique aqui.</Link>
        </div>
      </ContainerContent>
      <ToastContainer position="top-left" />
    </Container>
  );
};

export default Login;
