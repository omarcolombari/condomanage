import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { IoIosApps,IoMdApps,IoIosContacts,IoIosSettings,IoMdExit } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

const NavList = ({setAuthenticaded}) => {
    const history = useHistory();
    const handlePages = (page) => {
        history.push(page);
    }
    const logout = () => {
        localStorage.clear();
        setAuthenticaded(false)
        handlePages("/login")
    }

    return (
        <UnorderedList
            listStyleType="none"
            d="flex"
            flexDir="column"
            alignItems="center">
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>handlePages("/dashboard")}>
                    <IoMdApps/>Inicio
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>handlePages("/tenants")}>
                    <IoIosContacts/>Inquilinos
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>handlePages("/finances")}>
                    <MdAttachMoney/>Financeiro
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>handlePages("/requires")}>
                    <IoIosApps/>Demandas
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>handlePages("/settings")}>
                    <IoIosSettings/>Alterações
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={logout}>
                    <IoMdExit/>Sair
                </Heading>
            </ListItem>
        </UnorderedList>
    )
}

export default NavList;