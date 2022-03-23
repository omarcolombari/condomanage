import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import NavList from '../../Feats/NavList'

const DropDrawer = ({ isDrawerOpen,onDrawerClose,setAuthenticaded }) => {
    return (
        <Drawer
            isOpen={isDrawerOpen}
            placement='right'
            onClose={onDrawerClose}>
            <DrawerOverlay />
            <DrawerContent 
                h="100vh"
                bg="#00A5AE"
                borderBottomLeftRadius="25px"
                d="flex"
                flexDir="column">
                <DrawerCloseButton />
                <DrawerBody
                    d="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <NavList setAuthenticaded={setAuthenticaded}/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DropDrawer;
