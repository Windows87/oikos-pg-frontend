import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import Title from "../../../components/Title";
import absenceReasonOptions from "../../../settings/absenceReasonOptions";
import attendanceOptions from "../../../settings/attendanceOptions";

const LeaderChangeAttendanceModal = () => {
  return (
    <Modal isOpen onClose={() => {}}>
      <Title centered>Presença</Title>
      <Form>
        <Select placeholder="Selecione" options={attendanceOptions} />
        <Select
          placeholder="Motivo (Opcional)"
          options={absenceReasonOptions}
        />
        <Button type="submit">Atualizar</Button>
      </Form>
    </Modal>
  );
};

export default LeaderChangeAttendanceModal;
