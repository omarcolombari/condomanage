import { Box, Heading, Slide, useDisclosure,Text, Img } from "@chakra-ui/react";
import Header from "../../Components/Header_components/Header";
import LuanDev from "../../Assets/Images/luanDev.jpg";
import anaDev from "../../Assets/Images/anavaleska.jpg"
import ProfissionalCard from "../../Components/Profissional_Components/ProfissionalCard";
import { Redirect } from "react-router-dom";

const ProfissionalPage = ({ authenticaded, setAuthenticaded }) => {
  const { onOpen } = useDisclosure();

  return (
    <Slide in={onOpen} direction="left">
      <Box w="100vw" h="100vh" d="flex" flexDir="column" alignItems="center">
        <Box w="100%" mb="10px">
          <Header setAuthenticaded={setAuthenticaded} />
        </Box>
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
            variant="title1"
            mr="auto"
            ml="auto"
          >
            Quem Somos?
          </Heading>
          <Text 
            variant="text1"
            w={["300px","","600px"]}
            mr="auto"
            ml="auto"
          >
            Somos a The Blesseds,equipe formada por alunos da kenzie Academy Brasil,
            este é o nosso projeto desenvolvido para auxiliar gestores de condominios 
            de pequeno e médio porte,aqui estão os membros:
          </Text>
          <Box
            w={["100%","95%","60%"]}
            h={["60%","70%"]}
            d="flex"
            flexDir={["column","row"]}
            flexWrap="wrap"
            justifyContent="space-around"
            overflowX="auto"
            gap="15px"
          >
            <ProfissionalCard 
              role="Scrum master"
              photo="https://ca.slack-edge.com/TQZR39SET-U02C0UQHEPL-eef8f9674cef-512"
              nome="Brendo Souza"  
              github="https://github.com/brendosousa"
              linkedin="https://www.linkedin.com/in/brendo-sousa/"facebook=""
            />
            <ProfissionalCard 
              role="Tech lead"
              photo="https://ca.slack-edge.com/TQZR39SET-U02DBL1B8SF-4a2ed3732831-512"
              nome="Omar Gabriel"  
              github="https://github.com/omarcolombari"
              linkedin="https://www.linkedin.com/in/omar-colombari-49a658227/"
            /><ProfissionalCard 
              role="Product owner"
              photo={LuanDev}
              nome="Luan Pereira"  
              github="https://github.com/LuanPBS98"
              linkedin="https://www.linkedin.com/in/luan-pereira-6654281b3/"
            /><ProfissionalCard 
              role="Quality Assurance"
              photo="https://ca.slack-edge.com/TQZR39SET-U02AW9VL0TV-6ae415ad071f-512"
              nome="Leonardo Melegari"  
              github="https://github.com/leomelegari"
              linkedin="https://www.linkedin.com/in/leonardo-melegari/"
            /><ProfissionalCard 
              role="Quality Assurance"
              photo={anaDev}
              nome="Ana Valeska"  
              github="https://github.com/anavaleska2908"
              linkedin="https://www.linkedin.com/in/ana-valeska-santos/"
            /><ProfissionalCard 
              role="Quality Assurance"
              photo="https://ca.slack-edge.com/TQZR39SET-U027XJFRE2K-75671ddf0a8f-512"
              nome="Lissandro Miranda"  
              github="https://github.com/lissandrojs"
              linkedin="https://www.linkedin.com/in/lissandro-miranda-056914204/"
            />
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

export default ProfissionalPage;