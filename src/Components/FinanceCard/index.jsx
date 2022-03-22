import { Box, Heading, Text, useDisclosure, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { IoIosTrash } from "react-icons/io";
import { FinancesContext } from "../../Providers/Finances";
import ModalFinance from "../ModalFinance";

const FinanceCard = ({ item }) => {
  const {
    isOpen: isChangeFinanceOpen,
    onOpen: onChangeFinanceOpen,
    onClose: onChangeFinanceClose,
  } = useDisclosure();

  const { changeFinance, removeFinance } = useContext(FinancesContext);
  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc5NTc4NzcsImV4cCI6MTY0Nzk2MTQ3Nywic3ViIjoiMiJ9.5zmpHfwcwXg0zGvEzXz8x646VFl8OVSZ_yDjJ9kifdU";

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
        borderLeft={
          item.status === "Entrada" ? "6px solid green" : "6px solid red"
        }
        borderRight={
          item.status === "Entrada" ? "6px solid green" : "6px solid red"
        }
        borderRadius="4px"
        marginBottom="4px"
        cursor="pointer"
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
          data={item}
        />
      </Box>
    </>
  );
};

export default FinanceCard;
