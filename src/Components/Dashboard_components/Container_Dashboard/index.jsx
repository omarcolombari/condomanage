import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { IoIosHome, IoMdMap, IoIosBusiness, IoIosMail } from "react-icons/io";
import { DemandsContext } from "../../../Providers/Demands";
import { FinancesContext } from "../../../Providers/Finances";
import { TenantsContext } from "../../../Providers/Tenants";
import PieChart from "../PieChart";

const ContainerDashboard = ({ authenticaded }) => {

  const [user] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:infos")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@CondoManage:token")) || ""
  );
  
  const { tenants, showTenants } = useContext(TenantsContext);
  const { finances, showFinances } = useContext(FinancesContext);
  const { demands, showDemands } = useContext(DemandsContext);

  useEffect(() => {
    showTenants(token, user.user.id);
    showFinances(token, user.user.id);
    showDemands(token, user.user.id);
  }, [tenants.length, finances.lenght, demands.lenght]);

  const graficFinancesEntrada = finances.filter(
    (item) => item.status === "Entrada"
  ).length;

  const graficFinancesDespesas = finances.filter(
    (item) => item.status === "Despesa"
  ).length;

  const graficDemandsEntradas = demands.filter(
    (item) => item.status === "inProgress"
  ).length;

  const graficDemandsDespesas = demands.filter(
    (item) => item.status === "completed"
  ).length;

  return (
    <Box
      w={["98%"]}
      maxW="1300px"
      h={["85vh", "80vh"]}
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
          h={["45vh", "45vh", "50vh"]}
          overflowX="hidden"
          mt={["20px", "", "0px"]}
        >
          <Box w={["250px", "", "400px"]} width="auto" bg="transparent">
            <PieChart
              infoName="ocupação"
              infoDescribe="desocupados e ocupados"
              infoUp="desocupados"
              infoUpValue={user.user.apartments}
              infoDown="ocupados"
              infoDownValue={tenants.length}
              infoTittle="Overview de ocupação"
            />
          </Box>
          <Box w={["250px", "", "400px"]} width="auto" bg="transparent">
            <PieChart
              infoName="finança"
              infoDescribe="entradas e despesas"
              infoUp={graficFinancesEntrada === 0 ? "sem entrada" : "entradas"}
              infoUpValue={
                graficFinancesEntrada === 0 ? 1 : graficFinancesEntrada
              }
              infoDown={
                graficFinancesDespesas === 0 ? "sem Despesas" : "despesas"
              }
              infoDownValue={
                graficFinancesDespesas === 0 ? 1 : graficFinancesDespesas
              }
              infoTittle="Overview financeiro"
            />
          </Box>
          <Box w={["250px", "", "400px"]} width="auto" bg="transparent">
            <PieChart
              infoName="demandas"
              infoDescribe="em progresso e concluídas"
              infoUp={graficDemandsEntradas === 0 ? "sem demandas" : "demandas"}
              infoUpValue={
                graficDemandsEntradas === 0 ? 1 : graficDemandsEntradas
              }
              infoDown={
                graficDemandsDespesas === 0 ? "sem comcluídas" : "concluídas"
              }
              infoDownValue={
                graficDemandsDespesas === 0 ? 1 : graficDemandsDespesas
              }
              infoTittle="Overview de demandas"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContainerDashboard;