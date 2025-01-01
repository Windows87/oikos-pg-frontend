import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Textarea from "../../../components/Textarea";
import Title from "../../../components/Title";

const LeaderFinishMeetingModal = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <Title centered>Finalizar</Title>
      <Paragraph centered>
        Insira uma análise sobre o encontro, aprendizados e experiências
      </Paragraph>
      <Form>
        <Textarea placeholder="Análise do Encontro" />
        <Button type="submit">Finalizar</Button>
      </Form>
    </Modal>
  );
};

export default LeaderFinishMeetingModal;
