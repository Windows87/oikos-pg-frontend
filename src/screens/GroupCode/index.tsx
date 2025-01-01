import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

const GroupCode = () => {
  return (
    <DefaultBackground centered gap={12}>
      <Logo width={40} />
      <Title centered>Código</Title>
      <Paragraph centered width="95%">
        Insira o código do seu PG abaixo para terminar o seu cadastro. Caso não
        possua, peça para o seu líder de PG.
      </Paragraph>
      <Form>
        <Input type="number" placeholder="00000" codeStyle />
        <Button type="submit">Entrar</Button>
      </Form>
    </DefaultBackground>
  );
};

export default GroupCode;
