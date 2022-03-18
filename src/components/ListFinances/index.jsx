import CardFinance from "../CardFinance";
import { Container } from "@chakra-ui/react";
import { Box } from "./styles";

const ListFinances = ({ finances }) => {
  return (
    <Container padding="10px 10px 10px 10px">
      {finances.length > 0 ? (
        <Box>
          {finances.map((finance, index) => (
            <CardFinance finance={finance} key={index} />
          ))}
        </Box>
      ) : (
        <h1>Lista vazia</h1>
      )}
    </Container>
  );
};

export default ListFinances;
