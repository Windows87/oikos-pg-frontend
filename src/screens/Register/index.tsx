import DefaultBackground from "../../components/DefaultBackground";
import Logo from "../../components/Logo";
import FirstRegisterForm from "./components/FirstRegisterForm";
import SecondRegisterForm from "./components/SecondRegisterForm";

const Register = () => {
  return (
    <DefaultBackground centered gap={12}>
      <Logo width={65} />
      <SecondRegisterForm />
    </DefaultBackground>
  );
};

export default Register;
