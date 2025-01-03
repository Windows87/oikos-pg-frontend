import { useState } from "react";
import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import CreateAccountText from "./components/CreateAccountText";
import { useNavigate } from "react-router-dom";
import apiClient from "../../clients/apiClient";
import User from "../../types/User";
import { useUser } from "../../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const saveToken = (token: string) => localStorage.setItem("token", token);

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const token = await apiClient.login(email, password);
      saveToken(token);
      const user = await apiClient.getMe();
      setUser(user);
      verifyUserRoute(user);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const verifyUserRoute = (user: User) => {
    if (!user.group_id) return sendToGroupCode();
    if (user.is_leader) return sendToLeaderMeetings();
    sendToMemberMeetings();
  };

  const sendToLeaderMeetings = () => navigate("/leader/meetings");
  const sendToMemberMeetings = () => navigate("/member/meetings");
  const sendToGroupCode = () => navigate("/group-code");

  return (
    <DefaultBackground centered gap={12}>
      <Logo width={40} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{isLoading ? "Entrando.." : "Entrar"}</Button>
      </Form>
      <CreateAccountText />
    </DefaultBackground>
  );
};

export default Login;
