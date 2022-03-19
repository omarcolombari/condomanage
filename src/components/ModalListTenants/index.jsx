import {
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
Button,
Box,
Text,
Select,
FormControl,
Heading,

} from '@chakra-ui/react'
import Inputs from '../Input'

const ModalListTenants =({isOpenAlterTenants,onCloseAlterTenants,handleSubmit,register ,setStatusHome,handleChangeTenants,currentTenants, errors})=>{
    return (
        <Modal  isOpen={isOpenAlterTenants} onClose={onCloseAlterTenants}>
        <ModalOverlay/>
            <ModalContent h={["100%","75%"]} bg="#141155">
                <ModalHeader 
                
                // fontSize={["100px","200px","300px"]}  exemplo responsividade
                bg="#00A5AE"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
                ><Heading variant="title1">Alterar Inquilino</Heading></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Box
             h="850px"
             css={{
                 "&::-webkit-scrollbar": {
                 width: "4px",
                 },
                 "&::-webkit-scrollbar-track": {
                 width: "6px",
                 },
                 "&::-webkit-scrollbar-thumb": {
                 background: "#00A5AE",
                 borderRadius: "24px",
                 },
             }}
             overflowY="scroll">

                <form onSubmit={handleSubmit(handleChangeTenants)}>
                <FormControl >
                <Text color="white">Diguite o email</Text>
                <Inputs register={register} registerData="email" ph={currentTenants.email} bgColor="#00A5AE" phColor="white" type="text" name="email" ></Inputs>
                <Text
                variant="text1"
                color="red"
                fontSize="12px"
                fontWeight="700px"
                >{errors.email?.message}</Text>
                <Text marginTop="2px" color="white">Diguite a senha</Text>
                <Inputs register={register} registerData="password" ph={currentTenants.password} bgColor="#00A5AE" phColor="white" type="password" name="password"  ></Inputs>
                
                <Text color="white">Diguite o numero do Imovel</Text>
                <Inputs register={register} registerData="number" ph={currentTenants.number} bgColor="#00A5AE" phColor="white" type="number" name="number" ></Inputs>
                
                <Text color="white">Diguite o Nome do responsavel</Text>
                <Inputs register={register} registerData="responsible" ph={currentTenants.responsible} bgColor="#00A5AE" phColor="white" type="text" name="responsible" ></Inputs>   
                
                <Text color="white">Diguito o CPF</Text>
                <Inputs register={register} registerData="cpf" ph={currentTenants.cpf} bgColor="#00A5AE" phColor="white" type="number" name="cpf" ></Inputs> 
               
                <Text color="white">Diguite o valor</Text>
                <Inputs register={register} registerData="value" ph={currentTenants.value} bgColor="#00A5AE" phColor="white" type="number" name="value" ></Inputs>
                    
                <Text color="white">Selecione o status do imovel</Text>
                    <Select bgColor="#00A5AE" w="95%"{...register("status")} name="status" onChange={(e)=>setStatusHome(e.target.value)}>
                        <option selected="selected" value="selecione">vago</option>
                        <option value="comprado" selected>comprado</option>
                        <option value="alugado">Alugado</option>
                    </Select>
                    
                    <ModalFooter 
                    
                    display="flex"
                    justifyContent="space-around"
                    >
                        <Box padding={["25px","30px"]}>

                            <Button   colorScheme='blue' mr={3} onClick={onCloseAlterTenants}>
                            Fechar
                            </Button>
                            <Button type="submit"variant='default'>Alterar usuario</Button>
                        </Box>
                    </ModalFooter>

                </FormControl>
               
                </form>
            </Box>
          
                </ModalBody>
        
            </ModalContent>
        </Modal>)
        
    
}

export default ModalListTenants