import { useRef } from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

const FirstRegisterForm = () => {
  return (
    <Form>
      <Input type="number" placeholder="WhatsApp" />
      <Input type="text" placeholder="Data de Nascimento" />
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};

export default FirstRegisterForm;
