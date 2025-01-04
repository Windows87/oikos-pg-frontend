import { useState } from "react";
import absenceReasonOptions from "../../settings/absenceReasonOptions";
import attendanceOptions from "../../settings/attendanceOptions";
import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";
import Select from "../Select";
import Title from "../Title";
import apiClient from "../../clients/apiClient";
import MeetingAttendance from "../../types/MeetingAttendance";

interface ChangeAttendanceModalProps {
  attendance?: MeetingAttendance;
  isOpen: boolean;
  onSubmit: (newMeetingAttendance: MeetingAttendance) => void;
  onClose: () => void;
}

const ChangeAttendanceModal = ({
  attendance,
  isOpen,
  onSubmit,
  onClose,
}: ChangeAttendanceModalProps) => {
  const [attendanceType, setAttendanceType] = useState(
    attendance ? attendance.attendance_type : ""
  );
  const [absenceReason, setAbsenceReason] = useState(
    attendance ? attendance.absence_reason : ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await apiClient.updateAttendance(
        attendance!.id,
        attendanceType,
        absenceReason
      );
      const newMeetingAttendance: MeetingAttendance = {
        ...attendance!,
        attendance_type: attendanceType,
        absence_reason: absenceReason,
      };

      setIsLoading(false);
      setAttendanceType("");
      setAbsenceReason("");

      onSubmit(newMeetingAttendance);
      onClose();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title centered>Presença</Title>
      <Form onSubmit={handleSubmit}>
        <Select
          placeholder="Selecione"
          value={attendanceType}
          onChange={(e) => setAttendanceType(e.target.value)}
          options={attendanceOptions}
          required
        />
        {attendanceType === "Ausente" ? (
          <Select
            placeholder="Motivo (Opcional)"
            value={absenceReason}
            onChange={(e) => setAbsenceReason(e.target.value)}
            options={absenceReasonOptions}
          />
        ) : null}
        <Button type="submit">
          {isLoading ? "Atualizando.." : "Atualizar"}
        </Button>
      </Form>
    </Modal>
  );
};

export default ChangeAttendanceModal;
