import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavList = ({ onClose }) => {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        onClose();
    }
    return (
        <UnorderedList
            listStyleType="none"
            d="flex"
            flexDir="column"
            alignItems="center">
            <ListItem>
                <Heading variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/dashboard")}>
                    Inicio
                </Heading>
            </ListItem>
            <ListItem>
                <Heading variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/tenants")}>
                    Inquilinos
                </Heading>
            </ListItem>
            <ListItem>
                <Heading variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/finances")}>
                    Financeiro
                </Heading>
            </ListItem>
            <ListItem>
                <Heading variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/requires")}>
                    Demandas
                </Heading>
            </ListItem>
            <ListItem>
                <Heading variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={()=>history.push("/settings")}>
                    Alterações
                </Heading>
            </ListItem>
            <ListItem>
                <Heading variant="title5" cursor="pointer" fontSize={["24px","24px","36px"]} onClick={logout}>
                    Sair
                </Heading>
            </ListItem>
        </UnorderedList>
    )
}

export default NavList;
