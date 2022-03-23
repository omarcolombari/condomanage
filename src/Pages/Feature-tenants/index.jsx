import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { TenantsContext } from "../../Providers/Tenants";
import { Button, Box, useDisclosure, Heading } from "@chakra-ui/react";
import ModalAddTenants from "../../Components/ModalAddTenants";
import ModalListTenants from "../../Components/ModalListTenants";
import Header from "../../Components/Feats/Header";

const TenantsPage = ({ setAuthenticaded }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token") || "")
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos") || "")
  );
  const { showTenants, tenants, addTenant, changeTenant } =
    useContext(TenantsContext);

  const {
    isOpen: isAddOpen,
    onOpen: onAddOpen,
    onClose: onAddClose,
  } = useDisclosure();
  const {
    isOpen: isOpenAlterTenants,
    onOpen: onOpenAlterTenants,
    onClose: onCloseAlterTenants,
  } = useDisclosure();

  const [statusHome, setStatusHome] = useState();
  const [currentTenants, setCurrentTenants] = useState([]);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("Digite um e-mail válido"),
    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .required("Crie uma senha"),
    number: yup.string().required("Digite o número do imóvel"),
    responsible: yup.string().required("Digite o nome do dono"),
    cpf: yup.string("Somente números").required("Digite o CPF do inquilino"),
    value: yup.string("Somente números").required("Digite o valor pago"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddTenants = ({
    email,
    password,
    number,
    responsible,
    cpf,
    value,
  }) => {
    const newTenants = {
      email,
      password,
      number,
      responsible,
      cpf,
      value,
      status: statusHome,
    };
    addTenant(user.id, token, newTenants);
  };

  const handleChangeTenants = ({
    email,
    password,
    number,
    responsible,
    cpf,
    value,
  }) => {
    const changeTenants = {
      email,
      password,
      number,
      responsible,
      cpf,
      value,
      status: statusHome,
      userId: user.id,
    };
    changeTenant(token, changeTenants, currentTenants.id);
  };

  useEffect(() => {
    showTenants(token);
  }, [tenants]);

  return (
    <>
      <Header setAuthenticaded={setAuthenticaded} />
      <Box
        margin="10px auto"
        w={["98%"]}
        maxW="1300px"
        h="90%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="30px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          margin="10px"
          h="90px"
        >
          <Heading variant="title1">Lista de apartamentos</Heading>
          <Button
            variant="default"
            onClick={onAddOpen}
            w="45px"
            h="45px"
            borderRadius="100%"
            fontSize="30px"
            bg="#141155"
          >
            +
          </Button>

          <ModalAddTenants
            register={register}
            handleAddTenants={handleAddTenants}
            handleSubmit={handleSubmit}
            setStatusHome={setStatusHome}
            onAddClose={onAddClose}
            isAddOpen={isAddOpen}
            errors={errors}
          />
        </Box>

        <Box
          w={["100%"]}
          h="100%"
          bg="#c5e8fb"
          d="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          padding="20px"
          borderRadius="0 0 30px 30px"
        >
          {tenants?.map((tenant, index) => (
            <Box
              w="100%"
              key={index}
              onClick={() => setCurrentTenants(tenant)}
              display="flex"
              justifyContent="center"
            >
              <Box
                textAlign="center"
                color="#ffffff"
                borderRadius="18px"
                padding={["4px", "10px"]}
                bg="#00a5ae"
                display="flex"
                justifyContent="space-between"
                margin="10px"
                w="80%"
                fontSize={["18px", "28px"]}
                h={["30px", "35px", "60px"]}
                variant="default"
                key={index}
                onClick={onOpenAlterTenants}
              >
                <Box>
                  {tenant.responsible} {tenant.number}
                </Box>
                <Box
                  borderRadius="100%"
                  width={["20px", "30px"]}
                  height={["20px", "30px"]}
                  bg="green"
                >
                  {" "}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <ModalListTenants
          errors={errors}
          currentTenants={currentTenants}
          onCloseAlterTenants={onCloseAlterTenants}
          isOpenAlterTenants={isOpenAlterTenants}
          register={register}
          handleSubmit={handleSubmit}
          setStatusHome={setStatusHome}
          handleChangeTenants={handleChangeTenants}
        />
      </Box>
    </>
  );
};
export default TenantsPage;
