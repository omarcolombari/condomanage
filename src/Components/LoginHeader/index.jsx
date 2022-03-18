import { Box, Heading, } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const LoginHeader = () => {
    const history = useHistory();

    const handleNavigation = (path) => {
      return history.push(path);
    };

    return (
        <Box
            w={["97vw","47vw","40vw"]}
            d="flex"
            alignItems="center"
            justifyContent="space-around"
            ml={["5px","8px","2vw"]}>
            <Box 
                d="flex"
                flexDir="row"
                alignItems="baseline">
                <Heading variant="title1" fontSize={["28px","30px","38px"]}>Condo</Heading>
                <Heading variant="title1" fontSize={["24px","28px","36px"]} fontWeight="extralight">Manage</Heading>
            </Box>
            <MdOutlineArrowBack 
            cursor="pointer"
                size={30} 
                color={"#141155"} 
                onClick={()=>handleNavigation("/")}/>
        </Box>
    )
}

export default LoginHeader;