import { Card } from "./styles";
import { Box, Button } from "@chakra-ui/react";
import { BiArchive } from "react-icons/bi";
import { useDisclosure } from "@chakra-ui/react";
import ModalFinance from "../ModalFinance";
import { useContext } from "react";
import { FinancesContext } from "../../Providers/Finances";

const CardFinance = ({ finance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //const token = JSON.parse(localStorage.getItem("@CondoManage:token"));
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc4Njc0MjksImV4cCI6MTY0Nzg3MTAyOSwic3ViIjoiMSJ9.W14Mq7kkuRzQ4lEWBzW2SfhvzyzROA4_4i4jQ94wRes";

  //Pegar o Id do usuário
  //const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
  //const userId = user.id
  const userId = 1;

  const { changeFinance, removeFinance } = useContext(FinancesContext);

  const handleUpdateFinance = (data) => {
    const newData = { ...data, userId: userId };

    changeFinance(token, newData, finance.id);
  };

  const handleRemoveFinance = (financedId) => {
    removeFinance(token, financedId);
  };

  return (
    <Card status={finance.status}>
      <Box onClick={onOpen} cursor="pointer" title="Clique para editar">
        <h1>{finance.name}</h1>
        <span>
          {Number(finance.value).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <p>{finance.status}</p>
      </Box>
      <Button
        title="Arquivar"
        minW="48px"
        onClick={() => handleRemoveFinance(finance.id)}
      >
        <BiArchive />
      </Button>
      <ModalFinance
        isOpen={isOpen}
        onClose={onClose}
        handleChange={handleUpdateFinance}
        title="Atualizar finança"
        data={finance}
      />
    </Card>
  );
};

export default CardFinance;
