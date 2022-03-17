import {
        Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
   
    } from '@chakra-ui/react'

const ModalAddTenants =({register,handleAddTenants,handleSubmit,setStatusHome,isOpen,onClose,errors})=>{
    
    
   return (<Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>Adicionar Inquilino</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

        <form onSubmit={handleSubmit(handleAddTenants)}>
            <input {...register("email")} placeholder="Diguite o email" type="text" name="email"/>
            <input {...register("password")} placeholder="Diguite a senha" type="password" name="password" />
            <input {...register("number")} placeholder="Diguite o numero do imovel" type="number" name="number"/>
            <input {...register("responsible")} placeholder="Diguite o nome do responsavel" type="text" name="responsible"/>
            <input {...register("cpf")} placeholder="Diguite o nome do CPF" type="text" name="cpf"/>
            <input {...register("value")} placeholder="Valor do condominio" type="number" name="value"/>
            
            <select {...register("status")} name="status" onChange={(e)=>setStatusHome(e.target.value)}>
                <option selected="selected" value="selecione">selecione</option>
                <option value="comprado" selected>comprado</option>
                <option value="alugado">Alugado</option>
            </select>
            <button type="submit"> Cadastrar</button>
        </form>
        </ModalBody>

        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
        Fechar
        </Button>
        <Button variant='ghost'>Cadastrar usuario</Button>
        </ModalFooter>
    </ModalContent>
    </Modal>)
    
}

export default ModalAddTenants