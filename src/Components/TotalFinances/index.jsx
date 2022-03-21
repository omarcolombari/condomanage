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
    <Box w="100%" borderRadius="10px" bg="#00A5AE" color="white">
      <Text textAlign="center">Valor em caixa: R$ {totalPriceEntries}</Text>
      <Text textAlign="center">
        Valor das despesas: R$ {totalPriceExpenses}
      </Text>
    </Box>
  );
};

export default TotalFinances;
