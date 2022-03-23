import { Box, Input } from "@chakra-ui/react";

const Inputs = ({ register, bgColor, phColor, registerData, ph, type }) => {
  return (
    <Box bg={bgColor} w="100%" borderRadius="30px">
      <Input
        variant="outline"
        placeholder={ph}
        focusBorderColor="#00a5ae"
        _placeholder={{ opacity: 1, color: phColor }}
        {...register(registerData)}
        type={type}
      />
    </Box>
  );
};

export default Inputs;
