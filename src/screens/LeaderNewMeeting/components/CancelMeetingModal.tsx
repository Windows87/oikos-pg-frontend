import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import apiClient from "../../../clients/apiClient";

interface CancelMeetingModalProps {
  isOpen: boolean;
  meetingId?: number;
  onSubmit: () => void;
  onClose: () => void;
}

const CancelMeetingModal = ({
  meetingId,
  isOpen,
  onSubmit,
  onClose,
}: CancelMeetingModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCancelMeeting = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      await apiClient.cancelMeeting(meetingId!);
      onSubmit();
      onClose();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title centered>Cancelar Reunião</Title>
      <Paragraph centered>Tem certeza que deseja cancelar a reunião?</Paragraph>
      <Button onClick={handleCancelMeeting} width="100%">
        {isLoading ? "Cancelando.." : "Confirmar"}
      </Button>
    </Modal>
  );
};

export default CancelMeetingModal;
