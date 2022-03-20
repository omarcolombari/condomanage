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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZW5kb0BlbWFpbC5jb20iLCJpYXQiOjE2NDc3Mzk5MzEsImV4cCI6MTY0Nzc0MzUzMSwic3ViIjoiMSJ9.x7Ol8VpTCCLmt5yYr2JvMNoBwU3lc9skSS71LhIpZLc";

  const { changeFinance } = useContext(FinancesContext);

  const handleUpdateFinance = (data) => {
    const newData = { ...data, userId: 1 };

    changeFinance(token, newData, finance.id);
  };

  return (
    <Card status={finance.status} onClick={onOpen}>
      <Box>
        <h1>{finance.name}</h1>
        <span>R$ {Number(finance.value).toFixed(2).replace(".", ",")}</span>
        <p>{finance.status}</p>
      </Box>
      <Button title="Arquivar" minW="48px">
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
