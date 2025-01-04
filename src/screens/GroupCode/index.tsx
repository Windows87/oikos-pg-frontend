import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import apiClient from "../../clients/apiClient";

const GroupCode = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) return;

    try {
      await apiClient.registerGroup(code);
      sendToMemberMeetings();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const sendToMemberMeetings = () => navigate("/member/meetings");

  return (
    <DefaultBackground centered gap={12}>
      <Logo width={40} />
      <Title centered>Código</Title>
      <Paragraph centered width="95%">
        Insira o código do seu PG abaixo para terminar o seu cadastro. Caso não
        possua, peça para o seu líder de PG.
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="00000"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          codeStyle
          maxLength={6}
        />
        <Button type="submit">{isLoading ? "Entrando.." : "Entrar"}</Button>
      </Form>
    </DefaultBackground>
  );
};

export default GroupCode;
