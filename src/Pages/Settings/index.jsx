import { Box, Input,Heading, FormControl, Button } from "@chakra-ui/react"
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Components/Header";

const Settings = ({ authenticaded,setAuthenticaded }) => {

    const [user, setUser] = useState({})
    const { register, handleSubmit,} = useForm();
    const [tenants, setTenats] = useState(0)
    useEffect(() => {
        getUser()
    }, [])

    const id = JSON.parse(localStorage.getItem("@condomanage:id"))
    const token = JSON.parse(localStorage.getItem("@condomanage:token"))
    const getUser = () => {
        axios.get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))
    }
    const getTenants = () => {
        axios.get(`/tenants?userId=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => setTenats(res.data.length))
        .catch((err) => console.log(err))
    }



    const onSubmit = (data) => {
        if(data.name === ''){
            delete data.name
        }
        if(data.address === ''){
            delete data.address
        }
        if(data.complement === ''){
            delete data.complement
        }
        if(data.apartments === ''){
            delete data.apartments
        }
        if(data.adm === ''){
            delete data.adm
        }
        if(data.contact === ''){
            delete data.contact
        }
        if(data.email === ''){
            delete data.email
        }

        console.log(data)
    }

    //AUTENTICAÇÃO QUANDO JUNTAR TODAS AS FEATURES
    /*if(!authenticaded){
        return <Redirect to='/'/>
    }*/

    return(
        <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
            <Header setAuthenticaded={setAuthenticaded}/>
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
                        alteração de informaçôes do condomínio
                    </Heading>
                        <Box
                            w="100%"
                            d="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl
                                    d="flex"
                                    flexDir="row"
                                    flexWrap="wrap"
                                    w="100%"
                                    h={["50vh","60vh"]}
                                    alignItems="center"
                                    justifyContent="center"
                                    mt="30px"
                                    overflow="auto"
                                >
                                <Box>
                                    <Heading fontSize="14px" htmlFor="">Nome do condomínio</Heading>
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            {...register('name')}
                                            variant="outline"
                                            placeholder={user.name}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>

                                <Box ml={["0px","","10px"]}>
                                    <Heading fontSize="14px" htmlFor="">Endereço</Heading>
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            {...register('address')}
                                            variant="outline"
                                            placeholder={user.address}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>
                            
                                <Box>
                                    <Heading fontSize="14px" htmlFor="">Tipo de condomínio</Heading> 
                                        <Box
                                            bg="#c5e8fb"
                                            w="280px"
                                            borderRadius="30px">
                                                <Input
                                                {...register('complement')}
                                                variant="outline"
                                                placeholder={user.complement}
                                                focusBorderColor='transparent'
                                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                        </Box>
                                </Box>

                                <Box ml={["0px","","10px"]}>
                                    <Heading fontSize="14px" htmlFor="">Total de imóveis/apartamentos</Heading>
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            {...register('apartments')}
                                            variant="outline"
                                            placeholder={user.apartments}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>

                                <Box>
                                    <Heading fontSize="14px" htmlFor="">Total de imoveis/apartamentos vagos</Heading>
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            variant="outline"
                                            value={user.apartments - tenants}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>

                                <Box ml={["0px","","10px"]}>
                                    <Heading fontSize="14px" htmlFor="">Nome do/a síndico/a</Heading>
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            {...register('adm')}
                                            variant="outline"
                                            placeholder={user.adm}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>

                                <Box>
                                    <Heading fontSize="14px" htmlFor="">Contato do prédio</Heading> 
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            {...register('contact')}
                                            variant="outline"
                                            placeholder={user.contact}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>

                                <Box ml={["0px","","10px"]}>
                                    <Heading fontSize="14px" htmlFor="">Email para contato</Heading>
                                    <Box
                                        bg="#c5e8fb"
                                        w="280px"
                                        borderRadius="30px">
                                            <Input
                                            {...register('email')}
                                            variant="outline"
                                            placeholder={user.email}
                                            focusBorderColor='transparent'
                                            _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                                    </Box>
                                </Box>
                                <Button variant="default" mt="20px"w="72%"type='submit'>Atualizar dados </Button>
                                </FormControl>
                            </form>
                        </Box>
                    </Box>
                </Box>
        </Box>
    )
}

export default Settings