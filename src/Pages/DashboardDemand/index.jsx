import { Box, Button, filter, Heading, Input, useDisclosure } from "@chakra-ui/react"
import Header from "../../Components/Header"
import { AddIcon } from "@chakra-ui/icons"
import React from "react";
import { useDemands } from '../../providers/demand';
import ModalAddDemand from "../../Components/ModalAddDemand";
import ModalUpdateDemand from "../../Components/ModalUpdateDemand";

const DashboardDemand = () => {
    const {demand,  filteredDemand, setFilteredDemand, addDemand, filterDemands} = useDemands();
    const { isOpen,onOpen,onClose } = useDisclosure();
    const modalAdd = React.useRef();
    const modalUpdate = React.useRef();

    const filters = [ 'Todas', 'Em andamento', 'Concluídas' ];

    const handleFilter = ( filter ) => {
        filterDemands(filter)
    }

    return (
        <Box
        w="100vw"
        h="100vh"
        d="flex"
        flexDir="column"
        alignItems="center">
            <Box
            w="100%"
            mb="10px">
                <Header />
            </Box>
            <Box
        w="98%"
        h={["70vh","80vh"]}
        borderRadius="10px"
        boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)">
            <Heading ml="10px" mt="10px" mb="20px" variant="title1" fontSize={["18px","24px","40px"]}>Lista de Demandas:</Heading>
            <Box>
                <Box>
                    {filters.map ((filter, index) => <Button key={index} onClick={() => handleFilter(filter)}>{filter}</Button>)}
                    <AddIcon 
                        w={6} 
                        h={6} 
                        cursor='pointer'
                        ref={modalAdd}
                        onClick={onOpen}
                    />
                </Box>
                <Box>
                    {filteredDemand.map((item, index) => {
                        return (
                            <>
                                <Box key={index}
                                    bg="#00A5AE"
                                    w="300px"
                                    borderRadius="30px" onClick={onOpen}>
                                        <p>{ item.name }</p>
                                        <p>{item.status === 'inProgress' ? 'verde' : 'vermelho'}</p>
                                </Box>
                                <ModalUpdateDemand name={item.name} description={item.description} ref={modalUpdate}></ModalUpdateDemand>

                            </>
                        )
                    })}
                    
                </Box>
                
                <Box>
                    <ModalAddDemand 
                        isOpen={isOpen} 
                        onClose={onClose}
                        modalAdd={modalAdd}
                    />
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default DashboardDemand;