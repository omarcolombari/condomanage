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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc4MDc2MzIsImV4cCI6MTY0NzgxMTIzMiwic3ViIjoiMiJ9.Z5HnGM4QEWeJqaeItlFwzLIaTqhY2xXKh0aBbmy_U0U";

  //Pegar o Id do usuário
  //const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
  //const userId = user.id
  const userId = 2;

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
        <span>R$ {Number(finance.value).toFixed(2).replace(".", ",")}</span>
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
