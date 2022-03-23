import { Box, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { IoIosTrash } from "react-icons/io";
import { DemandsContext } from "../../Providers/Demands";
import ModalUpdateDemand from "../ModalUpdateDemand";

const CartDemand = ({ item }) => {
  const {
    isOpen: isUpdateDemandOpen,
    onOpen: onUpdateDemandOpen,
    onClose: onUpdateDemandClose,
  } = useDisclosure();
  const { delDemand } = useContext(DemandsContext);
  const handleDeleteDemand = (demandId) => {
    delDemand(demandId);
  };

  return (
    <>
      <Box
        w="100%"
        height="80px"
        display="flex"
        borderLeft={
          item.status === "inProgress" ? "6px solid green" : "6px solid red"
        }
        borderRight={
          item.status === "inProgress" ? "6px solid green" : "6px solid red"
        }
        borderRadius="4px"
        marginBottom="4px"
        cursor="pointer"
        backgroundColor="#f6f6f6"
        _hover={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(205,247,255,1) 50%, rgba(56,222,255,1) 100%, rgba(0,212,255,1) 100%, rgba(28,217,255,1) 100%, rgba(56,222,255,1) 100%, rgba(56,222,255,1) 100%)",
          boxShadow: "0px 4px 42px -12px rgba(0, 0, 0, 0.25);",
        }}
      >
        <Box
          d="flex"
          ml="10px"
          mr="2%"
          width="100%"
          justifyContent="space-between"
          overflowX="auto"
          alignItems="center"
        >
          <Box
            d="flex"
            width="95%"
            flexDir="column"
            gap="5px"
            onClick={onUpdateDemandOpen}
            title="Clique para editar"
          >
            <Heading variant="title2" fontSize="18px">
              {item.name}
            </Heading>
            <Text>{item.description}</Text>
          </Box>
          <IoIosTrash
            onClick={() => handleDeleteDemand(item.id)}
            title="Arquivar"
          />
        </Box>
        <ModalUpdateDemand
          isUpdateDemandOpen={isUpdateDemandOpen}
          onUpdateDemandClose={onUpdateDemandClose}
          title="Atualizar Demanda"
          item={item}
        />
      </Box>
    </>
  );
};

export default CartDemand;
