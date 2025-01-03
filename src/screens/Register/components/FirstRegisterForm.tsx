import { useState } from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";

interface FirstRegisterFormProps {
  onSubmit: (name: string, email: string, password: string) => void;
}

const FirstRegisterForm = ({ onSubmit }: FirstRegisterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(name, email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <Button type="submit">Continuar</Button>
    </Form>
  );
};

export default FirstRegisterForm;
