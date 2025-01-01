import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

const FirstRegisterForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Button type="submit">Continuar</Button>
    </Form>
  );
};

export default FirstRegisterForm;
