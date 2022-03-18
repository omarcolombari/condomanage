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
Select

} from '@chakra-ui/react'
import Inputs from '../Input'

const ModalListTenants =({isOpenAlterTenants,onCloseAlterTenants,handleSubmit,register ,setStatusHome,handleChangeTenants,currentTenants})=>{
    return (
        <Modal  isOpen={isOpenAlterTenants} onClose={onCloseAlterTenants}>
        <ModalOverlay/>
            <ModalContent h="50%" bg="#141155">
                <ModalHeader 
                
                // fontSize={["100px","200px","300px"]}  exemplo responsividade
                bg="#00A5AE"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
                >Alterar Inquilino</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Box
             h="250px"
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
                <Text color="white">Diguite o email</Text>
                <Inputs register={register} registerData="email" ph="Diguite o email" bgColor="#00A5AE" phColor="white" type="text" name="email" value={currentTenants.email}></Inputs>
                
                <Text color="white">Diguite a senha</Text>
                <Inputs register={register} registerData="password" ph="Diguite a senha" bgColor="#00A5AE" phColor="white" type="password" name="password" value={currentTenants.password} ></Inputs>
                
                <Text color="white">Diguite o numero do Imovel</Text>
                <Inputs register={register} registerData="number" ph="Diguite o numero do imovel" bgColor="#00A5AE" phColor="white" type="number" name="number"value={currentTenants.number} ></Inputs>
                
                <Text color="white">Diguite o Nome do responsavel</Text>
                <Inputs register={register} registerData="responsible" ph="Diguite o nome do responsavel" bgColor="#00A5AE" phColor="white" type="text" name="responsible" value={currentTenants.responsible}></Inputs>   
                
                <Text color="white">Diguito o CPF</Text>
                <Inputs register={register} registerData="cpf" ph="Diguite o numero do CPF" bgColor="#00A5AE" phColor="white" type="number" name="cpf" value={currentTenants.cpf}></Inputs> 
               
                <Text color="white">Diguite o valor</Text>
                <Inputs register={register} registerData="value" ph="Valor do condominio" bgColor="#00A5AE" phColor="white" type="number" name="value" value={currentTenants.value}></Inputs>
                    
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
                        <Button  colorScheme='blue' mr={3} onClick={onCloseAlterTenants}>
                        Fechar
                        </Button>
                        <Button type="submit"variant='default'>Alterar usuario</Button>
                    </ModalFooter>
                </form>
            </Box>
          
                </ModalBody>
        
            </ModalContent>
        </Modal>)
        
    
}

export default ModalListTenants