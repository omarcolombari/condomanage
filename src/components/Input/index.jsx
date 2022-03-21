import { Box, Input } from "@chakra-ui/react";

const Inputs = ({
  register,
  bgColor,
  phColor,
  registerData,
  ph,
  type,
  name,
}) => {
  return (
    <Box
      bg={bgColor}
      w="95%"
      h={["20px", "30px"]}
      borderRadius="30px"
      margin={["15px 0", "15px 0"]}
    >
      <Input
        id={name}
        type={type}
        name={name}
        register={registerData}
        variant="outline"
        placeholder={ph}
        focusBorderColor="transparent"
        _placeholder={{ opacity: 1, color: phColor }}
        {...register(registerData)}
      />
    </Box>
  );
};

export default Inputs;
