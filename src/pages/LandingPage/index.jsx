import {
  Container,
  ContainerButton,
  ContainerContent,
  ContainerLogo,
  ContainerText,
} from "./style";
import logo1 from "../../assets/modelo-4.png";
import logo2 from "../../assets/modelo-3.png";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <ContainerContent>
        <ContainerLogo>
          <img src={logo2} alt="" />
        </ContainerLogo>
        <ContainerText>
          <p>
            Smart Tool visada para facilitar o trabalho de gestores de
            condominios com agilidade, segurança e práticidade
          </p>
        </ContainerText>
        <ContainerButton>
          <button onClick={() => handleNavigation("/login")}>Login</button>
          <button onClick={() => handleNavigation("/signup")}>Cadastro</button>
        </ContainerButton>
      </ContainerContent>
    </Container>
  );
};

export default LandingPage;
