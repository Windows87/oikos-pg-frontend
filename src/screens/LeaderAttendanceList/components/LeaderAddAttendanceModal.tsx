import { useEffect, useState } from "react";
import { withMask } from "use-mask-input";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Select, { SelectOption } from "../../../components/Select";
import Title from "../../../components/Title";
import apiClient from "../../../clients/apiClient";
import MeetingAttendance from "../../../types/MeetingAttendance";
import Meeting from "../../../types/Meeting";
import User from "../../../types/User";

interface FirstStepProps {
  onChange: (step: number) => void;
}

interface FormProps {
  meeting: Meeting;
  onSubmit: (attendance: MeetingAttendance) => void;
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

const VisitorStep = ({ meeting, onSubmit }: FormProps) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const attendance = await apiClient.addVisitorAttendance(
        meeting.id,
        name,
        whatsapp
      );
      onSubmit(attendance);
    } catch (error: any) {
      alert("Erro ao adicionar visitante");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title centered>Visitante</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="WhatsApp (Opcional)"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          ref={withMask("(99) [9]9999-9999")}
        />
        <Button type="submit">
          {isLoading ? "Adicionando.." : "Adicionar"}
        </Button>
      </Form>
    </>
  );
};

const MemberStep = ({ meeting, onSubmit }: FormProps) => {
  const [memberId, setMemberId] = useState("");
  const [memberList, setMemberList] = useState<User[]>([]);
  const [isLoadingMembers, setIsLoadingMembers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMembers = async () => {
    setIsLoadingMembers(true);
    const members = await apiClient.getMembers();
    setMemberList(members);
    setIsLoadingMembers(false);
  };

  const generateOptions = (): SelectOption[] => {
    return memberList.map((member) => ({
      label: member.name,
      value: member.id.toString(),
    }));
  };

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const meetingAttendance = await apiClient.addMemberAttendance(
        meeting.id,
        Number(memberId)
      );
      onSubmit(meetingAttendance);
    } catch (error: any) {
      alert("Erro ao adicionar membro");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <>
      <Title centered>Membro</Title>
      <Form onSubmit={handleSubmit}>
        <Select
          placeholder={isLoadingMembers ? "Carregando Lista.." : "Selecione"}
          onChange={(e) => setMemberId(e.target.value)}
          options={generateOptions()}
          required
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </>
  );
};

interface LeaderAddAttendanceModalProps {
  isOpen: boolean;
  meeting: Meeting;
  onClose: () => void;
  onNewAttendance: (attendance: MeetingAttendance) => void;
}

const LeaderAddAttendanceModal = ({
  isOpen,
  meeting,
  onClose,
  onNewAttendance,
}: LeaderAddAttendanceModalProps) => {
  const [step, setStep] = useState(0);

  const handleOnClose = () => {
    setStep(0);
    onClose();
  };

  const handleNewAttendance = (attendance: MeetingAttendance) => {
    onNewAttendance(attendance);
    handleOnClose();
  };

  const steps = [
    <FirstStep onChange={setStep} />,
    <VisitorStep onSubmit={handleNewAttendance} meeting={meeting} />,
    <MemberStep onSubmit={handleNewAttendance} meeting={meeting} />,
  ];
  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      {steps[step]}
    </Modal>
  );
};

export default LeaderAddAttendanceModal;
