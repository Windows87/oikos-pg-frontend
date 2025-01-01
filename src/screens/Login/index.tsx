import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import CreateAccountText from "./components/CreateAccountText";

const Login = () => {
  return (
    <DefaultBackground centered gap={12}>
      <Logo width={65} />
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
      <CreateAccountText>Criar Conta</CreateAccountText>
    </DefaultBackground>
  );
};

export default Login;
