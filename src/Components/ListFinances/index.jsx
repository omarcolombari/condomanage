import CardFinance from "../CardFinance";
import { Box, Heading } from "@chakra-ui/react";

const ListFinances = ({ finances }) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      overflowX="auto"
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
    </Box>
  );
};

export default ListFinances;
