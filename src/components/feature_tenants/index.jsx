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
const TenantsPage =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();

  const [statusHome, setStatusHome] = useState();
  const [listTenants, setListTenants] = useState();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail invalido")
      .required("Diguite um E-mail valido"),
    password: yup
      .string()
      .min(6, "Minimo 6 caracteres")
      .required("Crie uma senha"),
    number: yup.number().required("Diguite o Number do imovel"),
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NTM2NTkyLCJleHAiOjE2NDc1NDAxOTIsInN1YiI6IjEifQ.oONmzvA9UpuKkAaeC6fwEAA6mZH-t35Hh8tjJSPncaY`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((erro) => console.log(erro));
  };

  const handleAllTenants = () => {
    axios
      .get("https://api-condomanage.herokuapp.com/tenants", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NTM2NTkyLCJleHAiOjE2NDc1NDAxOTIsInN1YiI6IjEifQ.oONmzvA9UpuKkAaeC6fwEAA6mZH-t35Hh8tjJSPncaY`,
        },
      })
      .then((resp) => setListTenants(resp.data));
  };

  useEffect(() => {
    handleAllTenants();
  }, [listTenants]);

  return (
    <>
      <h2>Lista de apartamento</h2>
      <Button onClick={onOpen}>+</Button>

      <ModalAddTenants
        register={register}
        handleAddTenants={handleAddTenants}
        handleSubmit={handleSubmit}
        setStatusHome={setStatusHome}
        onClose={onClose}
        isOpen={isOpen}
        errors={errors}
      />

      <Box>
        {listTenants?.map((tenant) => (
          <Box key={tenant.id}>
            {tenant.responsible} {tenant.number}
          </Box>
        ))}
      </Box>
    </>
  );

}
export default TenantsPage