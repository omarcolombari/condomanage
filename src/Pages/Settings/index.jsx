import { Box, Input } from "@chakra-ui/react"
import { Main } from "./styles"
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";


const Settings = ({ authenticaded }) => {

    const [user, setUser] = useState({})
    const { register, handleSubmit,} = useForm();
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
        <Main>
            <h2>Alteração de informações do condomínio</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="">Nome do condomínio</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('name')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>

                    <div>
                        <label htmlFor="">Endereço</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('address')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>
                   
                   <div>
                    <label htmlFor="">Tipo de condomínio</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('complement')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                   </div>

                    <div>
                        <label htmlFor="">Total de imóveis/apartamentos</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('apartments')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>

                    <div>
                        <label htmlFor="">Total de imoveis/apartamentos vagos</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>

                    <div>
                        <label htmlFor="">Nome do/a síndico/a</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('adm')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>

                    <div>
                        <label htmlFor="">Contato do prédio</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('contact')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>

                    <div>
                        <label htmlFor="">Email para contato</label>
                        <Box
                            bg="#c5e8fb"
                            w="300px"
                            borderRadius="30px">
                                <Input
                                {...register('email')}
                                variant="outline"
                                placeholder="teste"
                                focusBorderColor='transparent'
                                _placeholder={{ opacity: 1,color: '#00a5ae' }}/>
                        </Box>
                    </div>
                    <button type='submit'>Atualizar dados</button>
                </form>
            </div>
        </Main>
    )
}

export default Settings