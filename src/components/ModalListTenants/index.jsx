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

} from '@chakra-ui/react'

const ModalListTenants =({isOpenAlterTenants,onCloseAlterTenants,currentTenants})=>{
    return (
        <Modal isOpen={isOpenAlterTenants} onClose={onCloseAlterTenants}>
        <ModalOverlay />
            <ModalContent>
                <ModalHeader 
                // fontSize={["100px","200px","300px"]}  exemplo responsividade
                bg="#00A5AE"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
                >Adicionar Inquilino</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                
          <Box >
          <Text variants="text1">{currentTenants.email}</Text>

          <Text variants="text2"> {currentTenants.responsible} </Text>

          <Text>{currentTenants.number}  </Text>
        
          </Box>
                </ModalBody>
        
                <ModalFooter>
                <Button  colorScheme='blue' mr={3} onClick={onCloseAlterTenants}>
                Fechar
                </Button>
                <Button variant='ghost'>Alterar usuario</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>)
        
    
}

export default ModalListTenants