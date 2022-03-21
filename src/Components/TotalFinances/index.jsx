import { Box, Text } from "@chakra-ui/react";

const TotalFinances = ({ finances }) => {
  const entries = finances.filter((item) => {
    return item.status === "Entrada";
  });

  const expenses = finances.filter((item) => {
    return item.status === "Despesa";
  });

  const totalPriceEntries = entries.reduce((acum, actual) => {
    return Number(actual.value) + acum;
  }, 0);

  const totalPriceExpenses = expenses.reduce((acum, actual) => {
    return Number(actual.value) + acum;
  }, 0);

  return (
    <Box w={["95%","70%","40%"]} borderRadius="4px" bg="#00A5AE" color="white">
      <Text textAlign="center">Valor em caixa: {Number(totalPriceEntries).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
      <Text textAlign="center">
        Valor das despesas: R$ {totalPriceExpenses}
      </Text>
    </Box>
  );
};

export default TotalFinances;
