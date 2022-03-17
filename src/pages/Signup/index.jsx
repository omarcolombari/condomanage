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

const Signup = () => {
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

  return (
    <Container>
      <ContainerContent>
        <ContainerHeader>
          <h1>CondoManage</h1>
          <MdOutlineArrowBack onClick={() => handleNavigation("/")} />
        </ContainerHeader>
        <div className="cad-page">Cadastro</div>
        <ContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="container-input">
            <span>Nome do condomínio*</span>
            <input
              type="text"
              placeholder="Digite o nome do condomínio"
              {...register("name")}
            />
            <span className="error">{errors.name?.message}</span>
          </div>
          <div className="container-input">
            <span>CNPJ*</span>
            <input
              type="number"
              placeholder="Digite o CNPJ - apenas números"
              {...register("cnpj")}
            />
            <span className="error">{errors.cnpj?.message}</span>
          </div>
          <div className="container-input">
            <span>Nº de apartamentos/salas*</span>
            <input
              type="number"
              placeholder="Número de apartamentos/salas"
              {...register("apartments")}
            />
            <span className="error">{errors.apartments?.message}</span>
          </div>
          <div className="container-input">
            <span>Valor condomínio*</span>
            <input
              type="number"
              placeholder="Digite o valor do condomínio/mensal"
              {...register("valueBase")}
            />
            <span className="error">{errors.valueBase?.message}</span>
          </div>
          <div className="container-input">
            <span>Endereço*</span>
            <input
              type="text"
              placeholder="Digite o endereço e número"
              {...register("address")}
            />
            <span className="error">{errors.address?.message}</span>
          </div>
          <div className="container-input">
            <span>Tipo de condominio*</span>
            <input
              type="text"
              placeholder="Residencial, comercial, etc"
              {...register("complement")}
            />
            <span className="error">{errors.complement?.message}</span>
          </div>
          <div className="container-input">
            <span>Responsável*</span>
            <input
              type="name"
              placeholder="Nome do responsável/síndico"
              {...register("adm")}
            />
            <span className="error">{errors.adm?.message}</span>
          </div>
          <div className="container-input">
            <span>CPF do Responsável*</span>
            <input
              type="number"
              placeholder="CPF do responsável - apenas números"
              {...register("cpf")}
            />
            <span className="error">{errors.cpf?.message}</span>
          </div>
          <div className="container-input">
            <span>E-mail do Responsável*</span>
            <input
              type="email"
              placeholder="E-mail do responsável"
              {...register("email")}
            />
            <span className="error">{errors.email?.message}</span>
          </div>
          <div className="container-input">
            <span>Confirmar e-mail*</span>
            <input
              type="email"
              placeholder="Confirme seu e-mail"
              {...register("confirmEmail")}
            />
            <span className="error">{errors.confirmEmail?.message}</span>
          </div>
          <div className="container-input">
            <span>Senha*</span>
            <input
              type="password"
              placeholder="Digite uma senha"
              {...register("password")}
            />
            <span className="error">{errors.password?.message}</span>
          </div>
          <div className="container-input">
            <span>Confirmar senha*</span>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <span className="error">{errors.confirmPassword?.message}</span>
          </div>
          <ContainerButton>
            <button type="submit">Cadastrar</button>
          </ContainerButton>
          <span className="required">* campos obrigatórios</span>
        </ContainerForm>
      </ContainerContent>
    </Container>
  );
};

export default Signup;
