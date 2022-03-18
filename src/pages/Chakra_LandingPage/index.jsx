import { Box, Slide, useDisclosure } from "@chakra-ui/react";
import background from "../../assets/background.png";
import LandingPageContainer from "../../Components/Landing_container";

const ChakraLandingPage = () => {
    const { onOpen } = useDisclosure();
    return (
        <Box
            w="100vw"
            h="100vh"
            bgImg={background}
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover">
            <Slide in={onOpen}  style={{ zIndex: 10 }}>
                <LandingPageContainer/>
            </Slide>
            
        </Box>
    )
}

export default ChakraLandingPage;