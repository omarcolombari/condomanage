import { Box, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { IoIosTrash } from "react-icons/io";
import { FinancesContext } from "../../../Providers/Finances";
import ModalFinance from "../ModalFinance";

const FinanceCard = ({ item }) => {
  const {
    isOpen: isChangeFinanceOpen,
    onOpen: onChangeFinanceOpen,
    onClose: onChangeFinanceClose,
  } = useDisclosure();

  const { changeFinance, removeFinance } = useContext(FinancesContext);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token"))
  );

  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos"))
  );

  const handleRemoveFinance = (financedId) => {
    removeFinance(financedId, user.user.id, token);
    onChangeFinanceClose();
  };
  const handleUpdateFinance = (data, itemId, userId, token) => {
    const newData = { ...data };

    changeFinance(newData, itemId, userId, token);
  };

  return (
    <>
      <Box
        w="100%"
        height="80px"
        display="flex"
        justifyContent="space-between"
        borderLeft={
          item.status === "Entrada" ? "6px solid green" : "6px solid red"
        }
        borderRight={
          item.status === "Entrada" ? "6px solid green" : "6px solid red"
        }
        borderRadius="4px"
        marginBottom="4px"
        cursor="pointer"
        backgroundColor="#f6f6f6"
        _hover={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(205,247,255,1) 50%, rgba(56,222,255,1) 100%, rgba(0,212,255,1) 100%, rgba(28,217,255,1) 100%, rgba(56,222,255,1) 100%, rgba(56,222,255,1) 100%)",
          boxShadow: "0px 4px 42px -12px rgba(0, 0, 0, 0.25);",
        }}
      >
        <Box
          d="flex"
          ml="10px"
          mr="2%"
          w="100%"
          justifyContent="space-between"
          overflowX="auto"
          alignItems="center"
        >
          <Box
            d="flex"
            flexDir="column"
            gap="5px"
            onClick={onChangeFinanceOpen}
            title="Clique para editar"
          >
            <Heading variant="title2" fontSize="18px">
              {item.name}
            </Heading>
            <Text>
              {Number(item.value).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Box>
          <Icon
            as={IoIosTrash}
            w="20px"
            h="20px"
            title="Arquivar"
            onClick={() => handleRemoveFinance(item.id)}
          />
        </Box>
        <ModalFinance
          isOpen={isChangeFinanceOpen}
          onClose={onChangeFinanceClose}
          handleChange={handleUpdateFinance}
          title="Atualizar finança"
          item={item}
        />
      </Box>
    </>
  );
};

export default FinanceCard;