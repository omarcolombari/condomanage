import { useFinances } from "../../providers/Finance";
import CardFinance from "../CardFinance";
import { Container } from "@chakra-ui/react";

const ListFinances = () => {
  const { newFinances } = useFinances();

  return (
    <Container>
      {newFinances.length > 0 ? (
        <div>
          {newFinances.map((finance, index) => (
            <CardFinance finance={finance} key={index} />
          ))}
        </div>
      ) : (
        <h1>Lista vazia</h1>
      )}
    </Container>
  );
};

export default ListFinances;
