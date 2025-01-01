import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import StarterBackground from "./components/StarterBackground";

const Starter = () => {
  return (
    <StarterBackground>
      <Logo width={55} />
      <Title centered>
        Somos casa
        <br />e família.
      </Title>
      <Button>Entrar</Button>
    </StarterBackground>
  );
};

export default Starter;
