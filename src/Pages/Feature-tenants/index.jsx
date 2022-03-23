import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { TenantsContext } from "../../Providers/Tenants";
import { Box, useDisclosure, Heading, Slide } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosBusiness } from "react-icons/io";
import ModalAddTenants from "../../Components/ModalAddTenants";
import ModalListTenants from "../../Components/ModalListTenants";
import Header from "../../Components/Feats/Header";
import { Redirect } from "react-router-dom";

const TenantsPage = ({ setAuthenticaded, authenticaded }) => {
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

  const { onOpen: onTenantPageOpen } = useDisclosure();

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
    reset,
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
    const findNumberTenants = tenants.find(
      (item) => item.number === newTenants.number
    );
    reset();
    if (findNumberTenants) {
      return toast.error("Número de apartamento já existe");
    }

    onAddClose();
    return addTenant(newTenants);
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
      userId: user.user.id,
    };
    reset();
    changeTenant(changeTenants, currentTenants.id);
    onCloseAlterTenants();
  };

  useEffect(() => {
    showTenants();
  }, [tenants.length]);

  if (!authenticaded) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
        <Slide in={onTenantPageOpen} style={{ zIndex: 10 }} direction="left">
          <Header setAuthenticaded={setAuthenticaded} />
          <Box
            d="flex"
            flexDirection="column"
            alignItems="center"
            margin="10px auto"
            w={["98%"]}
            maxW="1300px"
            h="77vh"
            boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)"
            borderRadius="30px"
          >
            <Box w="100%">
              <Heading
                padding="30px"
                variant="title1"
                d="flex"
                justifyContent="space-around"
                w="100%"
                fontSize={["20px", "25px", "30px"]}
                alignItems="center"
              >
                Lista de Inquilinos
                <IoIosAddCircleOutline
                  cursor="pointer"
                  w="15px"
                  title="Adicionar finança"
                  onClick={onAddOpen}
                />
              </Heading>

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
              w={["95%", "70%", "90%"]}
              h={["32vh", "", "50vh"]}
              marginTop="10px"
              d="flex"
              flexDir="column"
              borderRadius="4px"
              overflow="auto"
            >
              {tenants.length > 0 ? (
                tenants?.map((tenant, index) => (
                  <Box
                    margin="5px 0 5px 0"
                    w="100%"
                    height="85px"
                    display="flex"
                    key={index}
                    onClick={() => setCurrentTenants(tenant)}
                    borderLeft={
                      tenant.status === "Vago"
                        ? "6px solid red"
                        : "6px solid green"
                    }
                    borderRight={
                      tenant.status === "Vago"
                        ? "6px solid red"
                        : "6px solid green"
                    }
                    borderRadius="4px"
                    marginBottom="4px"
                    cursor="pointer"
                    backgroundColor="#f6f6f6"
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(205,247,255,1) 50%, rgba(56,222,255,1) 100%, rgba(0,212,255,1) 100%, rgba(28,217,255,1) 100%, rgba(56,222,255,1) 100%, rgba(56,222,255,1) 100%)",
                      boxShadow: "0px 4px 42px -12px rgba(0, 0, 0, 0.25);",
                    }}
                  >
                    <Box
                      d="flex"
                      ml="10px"
                      mr="2%"
                      height="85px"
                      justifyContent="space-between"
                      overflowX="auto"
                      alignItems="center"
                      onClick={onOpenAlterTenants}
                    >
                      <Box
                        d="flex"
                        flexDir="column"
                        justifyContent="center"
                        gap="5px"
                        height="85px"
                        // width="100%"
                      >
                        <span>
                          <strong> Nome: </strong> {tenant.responsible}
                        </span>
                        <span>
                          <strong>Nº do apartamento:</strong> {tenant.number}
                        </span>
                      </Box>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box
                  h="100%"
                  w="100%"
                  d="flex"
                  justifyContent="center"
                  alignItems="center"
                  _hover={{
                    background:
                      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(205,247,255,1) 50%, rgba(56,222,255,1) 100%, rgba(0,212,255,1) 100%, rgba(28,217,255,1) 100%, rgba(56,222,255,1) 100%, rgba(56,222,255,1) 100%)",
                    boxShadow: "0px 4px 42px -12px rgba(0, 0, 0, 0.25);",
                  }}
                  transition={0.5}
                >
                  <Heading
                    variant="title3"
                    fontSize={["16px", "28px"]}
                    d="flex"
                    flexDir="column"
                    alignItems="center"
                  >
                    Sem Inquilinos registrado
                    <IoIosBusiness />
                  </Heading>
                </Box>
              )}
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
        </Slide>
      </Box>
    </>
  );
};
export default TenantsPage;
