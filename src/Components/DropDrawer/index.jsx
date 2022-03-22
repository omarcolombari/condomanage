import { Box,Img} from "@chakra-ui/react"
import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import NavList from '../Feats/NavList'

const DropDrawer = ({ user,isOpen,onClose }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent 
                h="100vh"
                bg="#00A5AE"
                borderBottomLeftRadius="25px"
                d="flex"
                flexDir="column"
                justifyContent="space-around"
                alignItems="center">
                <DrawerCloseButton variant="default"/>
                <DrawerHeader>
                    {user === undefined?
                        <Box w="200px" h="200px" borderRadius="50%" bg="grey" d="flex" justifyContent="center" alignItems="center">Adicione uma foto</Box>:
                        <Img src={user.foto} alt={user.name}/>}
                </DrawerHeader>
                <DrawerBody>
                    <NavList/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DropDrawer;
