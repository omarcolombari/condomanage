import { Box,Heading, Img, Text} from "@chakra-ui/react"
import { IoLogoGithub,IoLogoLinkedin,IoLogoFacebook } from "react-icons/io";
import {Link} from "react-router-dom";

const ProfissionalCard = ({role,photo,nome,github,linkedin,facebook}) =>{
  return(
      <Box
          d="flex"
          flexDir="column"
          alignItems="center"
      >
      <Heading 
        variant="title1" 
        fontSize="18px"
      >
        {role}
      </Heading>
      <Text
      variant="text1"
      fontSize="16px"
      mb="10px">
        {nome}
      </Text>
      <Box
        bg="linear-gradient(145deg, rgba(20,17,85,1) 0%, rgba(20,17,85,1) 44%, rgba(0,165,174,1) 100%)"
        w={["120px","","200px"]}
        h={["120px","","200px"]}
        d="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        cursor="pointer"
      >
        <Img 
          src={photo} 
          alt={nome}
          borderRadius="50%"
          w={["115px","","195px"]}
        />
      </Box> 
      <Box
        d="flex"
        flexDir="row"
        fontSize={["20px","","30px"]}
      >
        <a href={github} target="_blank">
          <IoLogoGithub color="#171515"/>
        </a>
        <a href={linkedin} target="_blank">
          <IoLogoLinkedin color="#0e76a8"/>
        </a>
      </Box>
    </Box>
  )
}

export default ProfissionalCard;