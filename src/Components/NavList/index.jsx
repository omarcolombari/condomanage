import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { IoIosApps,IoMdApps,IoIosContacts,IoIosSettings,IoMdExit } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";

const NavList = ({ onDrawerClose }) => {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        onDrawerClose();
    }
    return (
        <UnorderedList
            listStyleType="none"
            d="flex"
            flexDir="column"
            alignItems="center">
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/dashboard")}>
                    <IoMdApps/>Inicio
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/tenants")}>
                    <IoIosContacts/>Inquilinos
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/finances")}>
                    <MdAttachMoney/>Financeiro
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/requires")}>
                    <IoIosApps/>Demandas
                </Heading>
            </ListItem>
            <ListItem>
                <Heading d="flex" flexDir="row" alignItems="center" variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/settings")}>
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
