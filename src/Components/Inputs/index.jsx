import { Box, Input } from "@chakra-ui/react";

const Inputs = ({ register,bgColor,phColor,registerData,ph }) => {
    const teste = ""
    return(
        <Box
            bg= {bgColor}
            w="95%"
            borderRadius="30px">
            <Input 
                variant="outline"
                placeholder= {ph}
                focusBorderColor='transparent'
                _placeholder={{ opacity: 1,color: phColor }}
                {...register(registerData)}/>
        </Box>
    )
}

export default Inputs;