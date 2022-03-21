import { Box, Heading, Text } from "@chakra-ui/react";

const Dashboard = ({ user }) => {
    return (
        <Box
        w="98%"
        h={["70vh","80vh"]}
        borderRadius="10px"
        boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)">
            <Heading ml="10px" mt="10px" mb="20px" variant="title1" fontSize={["18px","24px","60px"]}>Bem-vindo : {/*user.answerable*/}</Heading>
            <Box>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Nome:{/*user.name*/}</Text>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Endereço:{/*user.adress*/}</Text>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Tipo de condomínio: {/*user.name*/}</Text>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Imóveis totais:{/*user.properties*/}</Text>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Imóveis vagos: {/*(user.properties - tenants.length)*/}</Text>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Nome do/a Síndico/A: {/*user.answerable*/}</Text>
                <Text ml="18px" variant="text2" fontSize={["14px","18px","28px"]} fontWeight="light">Email do prédio: {/*user.email*/}</Text>
            </Box>
        </Box>
    )
}

export default Dashboard;