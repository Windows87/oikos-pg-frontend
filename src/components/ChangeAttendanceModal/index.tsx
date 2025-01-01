import { useState } from "react";
import absenceReasonOptions from "../../settings/absenceReasonOptions";
import attendanceOptions from "../../settings/attendanceOptions";
import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";
import Select from "../Select";
import Title from "../Title";

interface ChangeAttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangeAttendanceModal = ({
  isOpen,
  onClose,
}: ChangeAttendanceModalProps) => {
  const [attendance, setAttendance] = useState("");
  const [absenceReason, setAbsenceReason] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title centered>Presença</Title>
      <Form>
        <Select
          placeholder="Selecione"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          options={attendanceOptions}
        />
        {attendance === "Não Presente" ? (
          <Select
            placeholder="Motivo (Opcional)"
            value={absenceReason}
            onChange={(e) => setAbsenceReason(e.target.value)}
            options={absenceReasonOptions}
          />
        ) : null}
        <Button type="submit">Atualizar</Button>
      </Form>
    </Modal>
  );
};

export default ChangeAttendanceModal;
