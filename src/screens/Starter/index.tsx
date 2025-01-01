import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import StarterBackground from "./components/StarterBackground";

const Starter = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");

  return (
    <StarterBackground>
      <Logo width={55} />
      <Title centered>
        Somos casa
        <br />e família.
      </Title>
      <Button onClick={goToLogin}>Entrar</Button>
    </StarterBackground>
  );
};

export default Starter;
