import { Box, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const SignupHeader = ({ link }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Box
      w={["285px", "", "355px"]}
      marginBottom="25px"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box d="flex" flexDir="row" alignItems="baseline" maxW="180px">
        <Heading variant="title1" fontSize={["25px"]}>
          Condo
        </Heading>
        <Heading variant="title1" fontSize={["25px"]} fontWeight="extralight">
          Manage
        </Heading>
      </Box>
      <MdOutlineArrowBack
        cursor="pointer"
        size={30}
        color={"#00a5ae"}
        onClick={() => handleNavigation("/")}
      />
    </Box>
  );
};

export default SignupHeader;
