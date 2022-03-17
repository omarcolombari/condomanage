import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
  } from '@chakra-ui/react'

const Modals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                bg="#141155">
                    <ModalHeader
                    bg="#00A5AE"
                    borderTopLeftRadius="5px"
                    borderTopRightRadius="5px">
                        Modal Title
                    </ModalHeader>
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
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Box
                        h="40px"
                        d="flex"
                        w="100%"
                        justifyContent="start"
                        alignItems="center">
                            <Button>
                                button example
                            </Button>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modals;