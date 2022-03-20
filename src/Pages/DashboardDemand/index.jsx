import { Box, Button, filter, Heading, Input, useDisclosure } from "@chakra-ui/react"
import Header from "../../Components/Header"
import { AddIcon } from "@chakra-ui/icons"
import React, { useEffect, useState, useContext } from "react";
import { DemandsContext} from '../../Providers/Demands';
import ModalAddDemand from "../../Components/ModalAddDemand";
import ModalUpdateDemand from "../../Components/ModalUpdateDemand";
import { CartDemand } from "../../Components/CartDemand";

const DashboardDemand = () => {
    const {demands} = useContext(DemandsContext);
    const { isOpen:isAddDemandOpen,onOpen:onAddDemandOpen,onClose:onAddDemandClose } = useDisclosure();
    const { isOpen:isUpdateDemandOpen,onOpen:onUpdateDemandOpen,onClose:onUpdateDemandClose } = useDisclosure();

    const [ filterBase, setFilterBase ] = useState( 'Todas' )

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
                    <Button onClick={() => setFilterBase('Todas')}>Todas</Button>
                    <Button onClick={() => setFilterBase('inProgress')}>Em andamento</Button>
                    <Button onClick={() => setFilterBase('completed')}>Concluídas</Button>
                    <AddIcon 
                        w={6} 
                        h={6} 
                        cursor='pointer'                    
                        onClick={onAddDemandOpen}
                    />
                </Box>
                <Box>
                    {demands.filter(({status}) => (filterBase === 'Todas') ? status !== 'Todas' : status === filterBase).map((item, index) => {
                        return (
                                <Box
                                    key={item.id}
                                    bg="#00A5AE"
                                    w="300px"
                                    borderRadius="30px" onClick={ onUpdateDemandOpen }>
                                    <CartDemand item={ item } />
                                    <ModalUpdateDemand
                                    item={ item }
                                    isUpdateDemandOpen={ isUpdateDemandOpen }
                                    onUpdateDemandClose={ onUpdateDemandClose }
                                    onAddDemandOpen={onAddDemandOpen}
                                ></ModalUpdateDemand>
                                </Box>

                        )
                    })}
                    
                </Box>
                
                <Box>
                    <ModalAddDemand 
                        isAddDemandOpen={isAddDemandOpen} 
                        onAddDemandClose={onAddDemandClose}
                    />
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default DashboardDemand;