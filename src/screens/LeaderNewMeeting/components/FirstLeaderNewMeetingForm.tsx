import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import meetingThemes from "../../../settings/meetingThemes";

const FirstLeaderNewMeetingForm = () => {
  return (
    <Form>
      <Input placeholder="Nome do Encontro" />
      <Input placeholder="Data" type="text" />
      <Select placeholder="Tema" options={meetingThemes} />
      <Button>Continuar</Button>
    </Form>
  );
};

export default FirstLeaderNewMeetingForm;
