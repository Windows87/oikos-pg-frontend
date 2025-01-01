import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Select from "../../../components/Select";
import Title from "../../../components/Title";

const FirstStep = () => {
  return (
    <>
      <Paragraph centered>Qual o tipo de pessoa que quer adicionar?</Paragraph>
      <Button>Membro já Cadastrado</Button>
      <Button>Visitante</Button>
    </>
  );
};

const VisitorStep = () => {
  return (
    <>
      <Title centered>Visitante</Title>
      <Form>
        <Input type="text" placeholder="Nome" />
        <Input type="number" placeholder="WhatsApp (Opcional)" />
        <Button type="submit">Adicionar</Button>
      </Form>
    </>
  );
};

const MemberStep = () => {
  return (
    <>
      <Title centered>Membro</Title>
      <Form>
        <Select placeholder="Selecione" options={[]} />
        <Button type="submit">Adicionar</Button>
      </Form>
    </>
  );
};

const LeaderAddAttendanceModal = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <MemberStep />
    </Modal>
  );
};

export default LeaderAddAttendanceModal;
