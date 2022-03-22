import { Box, Slide ,useDisclosure} from "@chakra-ui/react"
import TenantsPage from "../../components/Feature-tenants";
const PageTenant = ()=>{
    const {onOpen:onTenantPageOpen} = useDisclosure()
    return(
        
        <Box
            w="100vw" 
            h="100vh" 
            d="flex"
            flexDir="column"
            alignItems="center"
        >
            <Slide
               in={onTenantPageOpen}
               style={{ zIndex: 10 }} 
               direction="left" 
            >
                <TenantsPage/>
                
            </Slide>
        </Box>
       
    )
}
export default PageTenant