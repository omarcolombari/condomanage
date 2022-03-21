import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosHome,IoMdMap,IoIosBusiness,IoIosMail } from "react-icons/io";
import Grafico from "../grafico";

const Dashboard = ({authenticaded}) => {
    const [ dataUser,setDataUser ] = useState();
 console.log("dataUser ", dataUser.user.adm);

    const [user] = useState(JSON.parse(localStorage.getItem("@CondoManage:infos")) || "");
    
    const attUser = async () => {
        const att = await JSON.parse(localStorage.getItem("@CondoManage:infos")) || "" ;
        setDataUser(att)
    }
    useEffect(()=>{
        attUser()
    },authenticaded)

    return (
        <Box
            w="98%"
            h={["85vh","70vh","80vh"]}
            borderRadius="10px"
            boxShadow="0px 5px 10px 1px rgba(0,0,0,0.5)"
        >
            <Heading
                ml="10px"
                mt="10px"
                mb="20px"
                variant="title1"
                fontSize={["18px","24px","48px"]}
            >
                Bem-vindo : {dataUser.user.adm}
            </Heading>
            <Box
                d="flex"
                flexDir={["column","","row"]}
            >
                <Box
                    w={["95%","","45%"]}
                >
                    <Text 
                        variant="text3" 
                        fontSize={["14px","18px","28px"]}
                    >
                        <IoIosHome/>
                    </Text>
                    <Text
                        variant="text3" 
                        fontSize={["14px","18px","28px"]}
                    >
                        <IoMdMap/>
                    </Text>
                    <Text
                        variant="text3" 
                        fontSize={["14px","18px","28px"]}
                    >
                        <IoIosBusiness/>
                    </Text>
                    <Text 
                        variant="text3" 
                        fontSize={["14px","18px","28px"]}
                    >
                        <IoIosMail/>
                    </Text>
                </Box>
                <Box
                    w={["95%","","45%"]}
                    h={["200px","","50vh"]}
                    overflowX="auto"
                    mt={["20px","","0px"]}
                >
                    <Box 
                        w={["250px","","400px"]}
                        bg="transparent"
                    >
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
                    <Box 
                        w={["250px","","400px"]}
                        bg="transparent">
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
                    <Box 
                        w={["250px","","400px"]}
                        bg="transparent">
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
    )
}

export default Dashboard;