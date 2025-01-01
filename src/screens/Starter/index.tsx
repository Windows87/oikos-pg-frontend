import Button from "../../components/Button";
import Logo from "../../components/Logo";
import StarterBackground from "./components/StarterBackground";
import StarterTitle from "./components/StarterTitle";

const Starter = () => {
  return (
    <StarterBackground>
      <Logo width={55} />
      <StarterTitle>
        Somos casa
        <br />e família.
      </StarterTitle>
      <Button>Entrar</Button>
    </StarterBackground>
  );
};

export default Starter;
