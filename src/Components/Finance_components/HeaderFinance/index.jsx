import { Box, Heading } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";

const HeaderFinance = ({ onOpen, titulo }) => {
  return (
    <Box w="100%">
      <Heading
        d="flex"
        justifyContent="space-around"
        w="100%"
        fontSize={["20px", "25px", "30px"]}
        variant="title1"
        alignItems="center"
      >
        {titulo}
        <IoIosAddCircleOutline
          cursor="pointer"
          w="15px"
          title="Adicionar demanda"
          onClick={onOpen}
        />
      </Heading>
    </Box>
  );
};

export default HeaderFinance;