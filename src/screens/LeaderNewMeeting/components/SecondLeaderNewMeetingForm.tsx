import Button from "../../../components/Button";
import ContentsList from "../../../components/ContentsList";
import Form from "../../../components/Form";
import Content from "../../../types/Content";

const contents: Content[] = [
  {
    id: "1",
    name: "Perguntas do PG",
    type: "PDF",
    link: "/meeting/1",
  },
];

const SecondLeaderNewMeetingForm = () => {
  return (
    <Form>
      <ContentsList contents={contents} enableAddition enableDeletion />
      <Button>Finalizar</Button>
    </Form>
  );
};

export default SecondLeaderNewMeetingForm;
