import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import ModalAddTenants from "../ModalAddTenants";
import ModalListTenants from "../ModalListTenants";
const TenantsPage =()=>{
    const { isOpen:isAddOpen, onOpen:onAddOpen, onClose:onAddClose } = useDisclosure();
   
    const { 
        isOpen: isOpenAlterTenants, 
        onOpen: onOpenAlterTenants, 
        onClose: onCloseAlterTenants 
    } = useDisclosure()

  const [statusHome, setStatusHome] = useState();
  const [listTenants, setListTenants] = useState();
  const [currentTenants,setCurrentTenants]= useState([]);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail invalido")
      .required("Diguite um E-mail valido"),
    password: yup
      .string()
      .min(6, "Minimo 6 caracteres")
      .required("Crie uma senha"),
    number: yup.string().required("Diguite o Number do imovel"),
    responsible: yup.string().required("Diguite o nome do responsavel"),
    cpf: yup.number().required("Diguite o CPF do Inquilino"),
    value: yup.number().required("Diguite o valor pago mensalmente"),
  });

  const {register,handleSubmit,formState: { errors },} = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddTenants = ({email,password,number,responsible,cpf,value,}) => {
    const newTenants = {
      email,
      password,
      number,
      responsible,
      cpf,
      value,
      status: statusHome,
      userId: 1,
    };
    axios
      .post("https://api-condomanage.herokuapp.com/tenants", newTenants, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NTUwMjU0LCJleHAiOjE2NDc1NTM4NTQsInN1YiI6IjEifQ._yCZUzz9Yx3OkiwI8TqDiCuxJnmkEZfJOYaR_9I3jO4`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((erro) => console.log(erro));
  };

  const handleAllTenants = () => {
    axios
      .get("https://api-condomanage.herokuapp.com/tenants", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NTUwMjU0LCJleHAiOjE2NDc1NTM4NTQsInN1YiI6IjEifQ._yCZUzz9Yx3OkiwI8TqDiCuxJnmkEZfJOYaR_9I3jO4`,
        },
      })
      .then((resp) => setListTenants(resp.data));
  };

  useEffect(() => {
    handleAllTenants();
  }, [listTenants]);

  return (
    <>
    <div>
      <h2>Lista de apartamento</h2>
      <Button variants="default" onClick={onAddOpen}>+</Button>

      <ModalAddTenants
        register={register}
        handleAddTenants={handleAddTenants}
        handleSubmit={handleSubmit}
        setStatusHome={setStatusHome}
        onAddClose={onAddClose}
        isAddOpen={isAddOpen}
        errors={errors}
      />

    </div>

      <Box>
        {listTenants?.map((tenant) => (
          <Box onClick={()=>setCurrentTenants(tenant)}>

          <Button  onClick={
            onOpenAlterTenants

          } 
          key={tenant.id}>
            {tenant.responsible} {tenant.number}
          </Button>
          </Box>
        ))}
        <ModalListTenants currentTenants={currentTenants} onCloseAlterTenants={onCloseAlterTenants}
        isOpenAlterTenants={isOpenAlterTenants}/>

      </Box>
    </>
  );

}
export default TenantsPage