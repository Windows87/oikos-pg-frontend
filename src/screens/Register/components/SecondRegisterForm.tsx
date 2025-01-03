import { useState } from "react";
import { withMask } from "use-mask-input";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

interface FirstRegisterFormProps {
  isLoading: boolean;
  onSubmit: (birthday: string, whatsapp: string) => void;
}

const FirstRegisterForm = ({ isLoading, onSubmit }: FirstRegisterFormProps) => {
  const [birthday, setBirthday] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = () => {
    const day = birthday.split("/")[0];
    const month = birthday.split("/")[1];
    const year = birthday.split("/")[2];

    const formattedBirthday = `${day}/${month}/${year}`;
    onSubmit(new Date(formattedBirthday).toISOString(), whatsapp);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="WhatsApp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        ref={withMask("(99) [9]9999-9999")}
      />
      <Input
        type="text"
        placeholder="Data de Nascimento"
        value={birthday}
        ref={withMask("99/99/9999")}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <Button type="submit">{isLoading ? "Cadastrando.." : "Cadastrar"}</Button>
    </Form>
  );
};

export default FirstRegisterForm;
