import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { TenantsContext } from "../../Providers/Tenants";
import { Button, Box, useDisclosure, Heading } from "@chakra-ui/react";
import ModalAddTenants from "../ModalAddTenants";
import ModalListTenants from "../ModalListTenants";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosBusiness} from "react-icons/io";
const TenantsPage = () => {
  // const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3OTg2MzUzLCJleHAiOjE2NDc5ODk5NTMsInN1YiI6IjEifQ.S2dd-4Sy_XHATOvlSzZKJUsG3h_pPiFFIysPWQ59Wak"
  const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
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
    const findNumberTenants = tenants.find((item)=> item.number === newTenants.number)

    if(findNumberTenants){
      return toast.error('Numero de Apartamento ja existe')
    }
    
    return addTenant(1,token,newTenants)

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
      userId: 1,
    };
    changeTenant(token, changeTenants, currentTenants.id);
  };

  useEffect(() => {
    showTenants(token);
  }, [tenants]);

  return (
    <>
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        margin="10px auto"
        w="90%"
        h="90%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="30px"
      >
        <Box
          w="100%"
        >
          <Heading 
          padding="30px"
          variant="title1"
          d="flex"
          justifyContent="space-around"
          w="100%"
          fontSize={["20px","25px","30px"]}
          alignItems="center">Lista de apartamentos
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
          w={["95%","70%","90%"]}
          h={["32vh","","50vh"]}
          marginTop="10px"
          d="flex"
          flexDir="column"
          borderRadius="4px"
          overflow="auto"
        >
          
          {tenants.length > 0 ?tenants?.map((tenant, index) => (
            <Box
            margin= "5px 0 5px 0"
              w="100%"
              key={index}
              onClick={() => setCurrentTenants(tenant)}
    
              borderLeft={
                tenant.status === "Vago" ? "6px solid red" : "6px solid green"
              }
              borderRight={
                tenant.status === "Vago" ? "6px solid red" : "6px solid green"
              }
              borderRadius="4px"
              marginBottom="4px"
              cursor="pointer"
              _hover={{
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(205,247,255,1) 50%, rgba(56,222,255,1) 100%, rgba(0,212,255,1) 100%, rgba(28,217,255,1) 100%, rgba(56,222,255,1) 100%, rgba(56,222,255,1) 100%)",
                boxShadow: "0px 4px 42px -12px rgba(0, 0, 0, 0.25);"}}
            >
              <Box
                h="40px"
                d="flex"
                ml="10px"
                mr="2%"
                justifyContent="space-between"
                overflowX="auto"
                alignItems="center"
                onClick={onOpenAlterTenants}
              >
                <Box
                d="flex"
                flexDir="column"
                gap="5px">
                  {tenant.responsible} {tenant.number}
                </Box>
               
              </Box>
            </Box>
          )): (
            <Box
              h="100%"
              w="100%"
              d="flex"
              justifyContent="center"
              alignItems="center"
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
    </>
  );
};
export default TenantsPage;
