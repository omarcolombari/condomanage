import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosHome, IoMdMap, IoIosBusiness, IoIosMail } from "react-icons/io";
import Grafico from "../grafico";

const Dashboard = ({ authenticaded }) => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || ""
  );
  console.log("user ", user);

  return (
    <Box
      w={["98%"]}
      maxW="1300px"
      h={["85vh", "80vh", "80vh"]}
      display="flex"
      flexDir="column"
      alignItems={["", "", "center"]}
      borderRadius="10px"
      boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)"
    >
      <Heading
        ml="10px"
        mt="10px"
        mb="20px"
        variant="title1"
        fontSize={["20px", "22px", "40px"]}
        textAlign="center"
      >
        Bem-vindo : {user.user.adm}
      </Heading>
      <Box
        d="flex"
        flexDir={["column", "", "row"]}
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop={["", "", "40px"]}
      >
        <Box w={["auto", "", "45%"]}>
          <Text variant="text3" fontSize={["14px", "18px", "24px", "28px"]}>
            <IoIosHome />
            {user.user.name}
          </Text>
          <Text variant="text3" fontSize={["14px", "18px", "24px", "28px"]}>
            <IoMdMap />
            {user.user.address}
          </Text>
          <Text variant="text3" fontSize={["14px", "18px", "24px", "28px"]}>
            <IoIosBusiness />
            {user.user.complement}
          </Text>
          <Text variant="text3" fontSize={["14px", "18px", "24px", "28px"]}>
            <IoIosMail />
            {user.user.email}
          </Text>
        </Box>
        <Box
          w={["95%", "", "45%", "auto"]}
          h={["55vh", "", "50vh"]}
          overflowX="hidden"
          mt={["20px", "", "0px"]}
        >
          <Box w={["250px", "", "400px"]} width="auto" bg="transparent">
            <Grafico
              infoName="ocupação"
              infoDescribe="desocupados e ocupados"
              infoUp="desocupados"
              infoUpValue={11}
              infoDown="ocupados"
              infoDownValue={2}
              infoTittle="Overview de ocupação"
            />
          </Box>
          <Box w={["250px", "", "400px"]} width="auto" bg="transparent">
            <Grafico
              infoName="finança"
              infoDescribe="entradas e despesas"
              infoUp="entradas"
              infoUpValue={11}
              infoDown="despesas"
              infoDownValue={2}
              infoTittle="Balanço financeiro"
            />
          </Box>
          <Box w={["250px", "", "400px"]} width="auto" bg="transparent">
            <Grafico
              infoName="demandas"
              infoDescribe="em progresso e concluídas"
              infoUp="em progresso"
              infoUpValue={11}
              infoDown="concluídas"
              infoDownValue={2}
              infoTittle="Overview de demandas"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
