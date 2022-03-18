import { Card } from "./styles";

const CardFinance = ({ finance }) => {
  return (
    <Card>
      <h1>{finance.name}</h1>
      <span>R$ {Number(finance.value).toFixed(2).replace(".", ",")}</span>
      <p>{finance.status}</p>
    </Card>
  );
};

export default CardFinance;
