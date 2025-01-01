import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import meetingThemes from "../../../settings/meetingThemes";

interface FirstLeaderNewMeetingFormProps {
  onSubmit: () => void;
}

const FirstLeaderNewMeetingForm = ({
  onSubmit,
}: FirstLeaderNewMeetingFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="Nome do Encontro" />
      <Input placeholder="Data" type="text" />
      <Select placeholder="Tema" options={meetingThemes} />
      <Button type="submit">Continuar</Button>
    </Form>
  );
};

export default FirstLeaderNewMeetingForm;
