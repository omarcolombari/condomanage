import { Box, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { IoIosTrash } from "react-icons/io";
import { FinancesContext } from "../../Providers/Finances";
import ModalFinance from "../ModalFinance";

const FinanceCard = ({item}) => {
    const { isOpen:isChangeFinanceOpen, onOpen:onChangeFinanceOpen, onClose:onChangeFinanceClose } = useDisclosure();

    const { changeFinance, removeFinance } = useContext(FinancesContext);  
    //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY0Nzg5Nzk4MSwiZXhwIjoxNjQ3OTAxNTgxLCJzdWIiOiIyIn0.G1aFBGTPQaoZLj4aKB57AlDSjprlmWu8hXoErTOuotA";

    //Pegar o Id do usuário
    //const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
    //const userId = user.id
    const userId = 2;

    const handleRemoveFinance = (financedId) => {
        removeFinance(token, financedId);
    };
    const handleUpdateFinance = (data) => {
        const newData = { ...data, userId: userId };
    
        changeFinance(token, newData, item.id);
      };
    
    return (
        <>
            <Box
                w="100%"
                h="60px"
                borderLeft={item.status === "Entrada"?"6px solid green":"6px solid red"}
                borderRight={item.status === "Entrada"?"6px solid green":"6px solid red"}
                borderRadius="4px"
                marginBottom="4px"
                cursor="pointer"
            >
                <Box
                    d="flex"
                    ml="10px"
                    mr="2%"
                    justifyContent="space-between"
                    overflowX="auto"
                    alignItems="center"
                >
                    <Box
                    d="flex"
                    flexDir="column"
                    gap="5px"
                    onClick={onChangeFinanceOpen}>
                        <Heading variant="title2" fontSize="18px">
                            {item.name}
                        </Heading>
                        <Text>
                            {Number(item.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </Text>
                    </Box>
                    <IoIosTrash
                        onClick={()=>handleRemoveFinance(item.id)}
                    />
                </Box>
                <ModalFinance
                    isOpen={isChangeFinanceOpen}
                    onClose={onChangeFinanceClose}
                    handleChange={handleUpdateFinance}
                    title="Atualizar finança"
                    data={item}
                />
            </Box>
        </>
    )
}

export default FinanceCard