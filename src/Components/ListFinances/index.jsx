import CardFinance from "../CardFinance";
import { Container, Heading } from "@chakra-ui/react";
import { Box } from "./styles";
import TotalFinances from "../TotalFinances";

const ListFinances = ({ finances }) => {
  return (
    <Container
      padding="10px 10px 10px 10px"
      height="400px"
      display="flex"
      flexDirection="column"
      gap="10px"
    >
      {finances.length > 0 ? (
        <Box>
          {finances.map((finance, index) => (
            <CardFinance finance={finance} key={index} />
          ))}
        </Box>
      ) : (
        <Heading fontSize="30px" textAlign="center">
          Lista vazia
        </Heading>
      )}
      <TotalFinances finances={finances} />
    </Container>
  );
};

export default ListFinances;
