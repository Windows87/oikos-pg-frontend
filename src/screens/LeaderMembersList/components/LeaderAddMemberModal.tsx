import { useState } from "react";
import { withMask } from "use-mask-input";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import apiClient from "../../../clients/apiClient";
import styled from "styled-components";
import { useUser } from "../../../contexts/UserContext";

interface FirstStepProps {
  onChange: (step: number) => void;
}

interface AlreadyUserStepProps {
  onSubmit: () => void;
}

interface NewUserStepProps {
  onClose: () => void;
}

const FirstStep = ({ onChange }: FirstStepProps) => {
  return (
    <>
      <Paragraph centered>O membro já é cadastrado no aplicativo?</Paragraph>
      <Button onClick={() => onChange(1)} width="100%">
        Sim
      </Button>
      <Button onClick={() => onChange(2)} width="100%">
        Não
      </Button>
    </>
  );
};

const AlreadyUserStep = ({ onSubmit }: AlreadyUserStepProps) => {
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await apiClient.addMemberToGroup(whatsapp);
      onSubmit();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title centered>Novo Membro</Title>
      <Paragraph centered>
        Adicione o Whatsapp cadastrado do usuário abaixo para adicioná-lo no seu
        PG
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          ref={withMask("(99) [9]9999-9999")}
          required
        />
        <Button type="submit">
          {isLoading ? "Adicionando.." : "Adicionar"}
        </Button>
      </Form>
    </>
  );
};

const CodeText = styled.span`
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

const NewUserStep = ({ onClose }: NewUserStepProps) => {
  const { user } = useUser();
  return (
    <>
      <Title centered>Convite</Title>
      <Paragraph centered>
        Envie o código abaixo para o novo membro e peça para ele inserir no
        aplicativo para finalizar o cadastro.
      </Paragraph>
      <CodeText>{user?.group!.code}</CodeText>
      <Button onClick={onClose}>Fechar</Button>
    </>
  );
};

interface LeaderAddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewMember: () => void;
}

const LeaderAddMemberModal = ({
  isOpen,
  onClose,
  onNewMember,
}: LeaderAddMemberModalProps) => {
  const [step, setStep] = useState(0);

  const handleOnClose = () => {
    setStep(0);
    onClose();
  };

  const handleNewMember = () => {
    onNewMember();
    handleOnClose();
  };

  const steps = [
    <FirstStep onChange={setStep} />,
    <AlreadyUserStep onSubmit={handleNewMember} />,
    <NewUserStep onClose={handleOnClose} />,
  ];
  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      {steps[step]}
    </Modal>
  );
};

export default LeaderAddMemberModal;
