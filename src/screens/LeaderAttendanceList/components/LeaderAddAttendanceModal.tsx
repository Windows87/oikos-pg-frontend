import { useState } from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Select from "../../../components/Select";
import Title from "../../../components/Title";

interface FirstStepProps {
  onChange: (step: number) => void;
}

const FirstStep = ({ onChange }: FirstStepProps) => {
  return (
    <>
      <Paragraph centered>Qual o tipo de pessoa que quer adicionar?</Paragraph>
      <Button onClick={() => onChange(2)}>Membro já Cadastrado</Button>
      <Button onClick={() => onChange(1)}>Visitante</Button>
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

interface LeaderAddAttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeaderAddAttendanceModal = ({
  isOpen,
  onClose,
}: LeaderAddAttendanceModalProps) => {
  const [step, setStep] = useState(0);

  const steps = [
    <FirstStep onChange={setStep} />,
    <VisitorStep />,
    <MemberStep />,
  ];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {steps[step]}
    </Modal>
  );
};

export default LeaderAddAttendanceModal;
