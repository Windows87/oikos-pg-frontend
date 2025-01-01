import { useState } from "react";
import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import CreateAccountText from "./components/CreateAccountText";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email === "yfaria@usp.br") return goToLeaderMeetings();
    goToMemberMeetings();
  };

  const goToLeaderMeetings = () => navigate("/leader/meetings");
  const goToMemberMeetings = () => navigate("/member/meetings");

  return (
    <DefaultBackground centered gap={12}>
      <Logo width={40} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
      <CreateAccountText>Criar Conta</CreateAccountText>
    </DefaultBackground>
  );
};

export default Login;
