import { useState } from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Textarea from "../../../components/Textarea";
import Title from "../../../components/Title";
import apiClient from "../../../clients/apiClient";

interface LeaderFinishMeetingModalProps {
  isOpen: boolean;
  meetingId?: number;
  onClose: () => void;
  onSubmit: () => void;
}

const LeaderFinishMeetingModal = ({
  isOpen,
  meetingId,
  onClose,
  onSubmit,
}: LeaderFinishMeetingModalProps) => {
  const [analysis, setAnalysis] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await apiClient.finishMeeting(meetingId!, analysis);
      setIsLoading(false);
      onSubmit();
      onClose();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title centered>Finalizar</Title>
      <Paragraph centered>
        Insira uma análise sobre o encontro, aprendizados e experiências
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Análise do Encontro"
          value={analysis}
          onChange={(e) => setAnalysis(e.target.value)}
          required
        />
        <Button type="submit">
          {isLoading ? "Finalizando.." : "Finalizar"}
        </Button>
      </Form>
    </Modal>
  );
};

export default LeaderFinishMeetingModal;
