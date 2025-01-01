import absenceReasonOptions from "../../settings/absenceReasonOptions";
import attendanceOptions from "../../settings/attendanceOptions";
import Button from "../Button";
import Form from "../Form";
import Modal from "../Modal";
import Select from "../Select";
import Title from "../Title";

const ChangeAttendanceModal = () => {
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

export default ChangeAttendanceModal;
