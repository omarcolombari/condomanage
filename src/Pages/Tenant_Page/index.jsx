import { Box, Slide ,useDisclosure} from "@chakra-ui/react"
import TenantsPage from "../../Pages/Feature-tenants";
const PageTenant = ( authenticaded, setAuthenticaded )=>{
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
                <TenantsPage authenticaded={authenticaded} setAuthenticaded={setAuthenticaded}/>
                
            </Slide>
        </Box>
       
    )
}
export default PageTenant