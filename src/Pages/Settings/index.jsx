import {
  Box,
  Input,
  Heading,
  FormControl,
  Button,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Feats/Header";
import { UserContext } from "../../Providers/User";
import { TenantsContext } from "../../Providers/Tenants";
import { Link } from "react-router-dom";

const Settings = ({ authenticaded, setAuthenticaded }) => {
  const [user, setUser] = useState({});
  const { register, handleSubmit } = useForm();
  const { userInfo, getUser, changeUser } = useContext(UserContext);
  const { tenants, showTenants } = useContext(TenantsContext);
  const { onOpen: onContainerDemandOpen } = useDisclosure();
  const [userData] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || []
  );

  useEffect(() => {
    getUser(userData.user.id);
    showTenants();
  }, [userInfo.length]);

  const onSubmit = (data) => {
    if (data.name === "") {
      delete data.name;
    }
    if (data.address === "") {
      delete data.address;
    }
    if (data.complement === "") {
      delete data.complement;
    }
    if (data.apartments === "") {
      delete data.apartments;
    }
    if (data.adm === "") {
      delete data.adm;
    }
    if (data.contact === "") {
      delete data.contact;
    }
    if (data.email === "") {
      delete data.email;
    }
    changeUser(data);
  };

  if (!authenticaded) {
    return <Link to="/login" />;
  }

  return (
    <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
      <Slide style={{ zIndex: 10 }} direction="left" in={onContainerDemandOpen}>
        <Header setAuthenticaded={setAuthenticaded} />
        <Box w="100%">
          <Box
            w="90%"
            maxW="779.73px"
            margin="0 auto"
            h="77vh"
            borderRadius="10px"
            boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="20px"
          >
            <Heading
              d="flex"
              justifyContent="space-around"
              w="100%"
              fontSize={["20px", "25px", "30px"]}
              variant="title1"
              mt="5px"
              textAlign="center"
            >
              Alteração de informações do condomínio
            </Heading>
            <Box w="100%" d="flex" alignItems="center" justifyContent="center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  d="flex"
                  flexDir="row"
                  flexWrap="wrap"
                  w="100%"
                  h={["50vh", "60vh"]}
                  alignItems="center"
                  justifyContent="center"
                  mt="30px"
                  overflow="auto"
                >
                  <Box>
                    <Heading fontSize="14px" htmlFor="">
                      Nome do condomínio
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("name")}
                        variant="outline"
                        placeholder={userInfo.name}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box ml={["0px", "", "10px"]}>
                    <Heading fontSize="14px" htmlFor="">
                      Endereço
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("address")}
                        variant="outline"
                        placeholder={userInfo.address}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Heading fontSize="14px" htmlFor="">
                      Tipo de condomínio
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("complement")}
                        variant="outline"
                        placeholder={userInfo.complement}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box ml={["0px", "", "10px"]}>
                    <Heading fontSize="14px" htmlFor="">
                      Total de imóveis/apartamentos
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("apartments")}
                        variant="outline"
                        placeholder={userInfo.apartments}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Heading fontSize="14px" htmlFor="">
                      Total de imoveis/apartamentos vagos
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        variant="outline"
                        value={userInfo.apartments - tenants.length}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box ml={["0px", "", "10px"]}>
                    <Heading fontSize="14px" htmlFor="">
                      Nome do/a síndico/a
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("adm")}
                        variant="outline"
                        placeholder={userInfo.adm}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Heading fontSize="14px" htmlFor="">
                      Contato do prédio
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("contact")}
                        variant="outline"
                        placeholder={userInfo.contact}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>

                  <Box ml={["0px", "", "10px"]}>
                    <Heading fontSize="14px" htmlFor="">
                      E-mail para contato
                    </Heading>
                    <Box bg="#c5e8fb" w="280px" borderRadius="30px">
                      <Input
                        {...register("email")}
                        variant="outline"
                        placeholder={userInfo.email}
                        focusBorderColor="transparent"
                        _placeholder={{ opacity: 1, color: "#00a5ae" }}
                      />
                    </Box>
                  </Box>
                  <Button variant="default" mt="20px" w="72%" type="submit">
                    Atualizar dados{" "}
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default Settings;
