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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc4MDM5NTgsImV4cCI6MTY0NzgwNzU1OCwic3ViIjoiMiJ9.Q457RanuaFLnUdR8znsZ6V4u_vKJRUa5N0WlRHGuZtQ";

  const { changeFinance, removeFinance } = useContext(FinancesContext);

  const handleUpdateFinance = (data) => {
    const newData = { ...data, userId: 2 };

    changeFinance(token, newData, finance.id);
  };

  const handleRemoveFinance = (financedId) => {
    removeFinance(token, financedId);
  };

  return (
    <Card status={finance.status}>
      <Box onClick={onOpen}>
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
