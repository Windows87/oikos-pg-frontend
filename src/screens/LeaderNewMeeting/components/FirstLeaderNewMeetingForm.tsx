import { useState } from "react";
import { withMask } from "use-mask-input";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import meetingThemes from "../../../settings/meetingThemes";

interface FirstLeaderNewMeetingFormProps {
  onSubmit: (name: string, date: string, theme: string) => void;
}

const FirstLeaderNewMeetingForm = ({
  onSubmit,
}: FirstLeaderNewMeetingFormProps) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");

  const handleSubmit = () => {
    const day = date.split("/")[0];
    const month = date.split("/")[1];
    const year = date.split("/")[2];

    const formattedDate = `${month}/${day}/${year}`;
    onSubmit(name, new Date(formattedDate).toISOString(), theme);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Nome do Encontro"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        placeholder="Data"
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        ref={withMask("99/99/9999")}
        required
      />
      <Select
        placeholder="Tema"
        options={meetingThemes}
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        required
      />
      <Button type="submit">Continuar</Button>
    </Form>
  );
};

export default FirstLeaderNewMeetingForm;
