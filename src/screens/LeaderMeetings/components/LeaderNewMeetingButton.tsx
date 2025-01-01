import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const LeaderNewMeetingButton = () => {
  const navigate = useNavigate();

  const goToNewMeeting = () => navigate("/leader/meeting/new");

  return (
    <Button
      width="100%"
      onClick={goToNewMeeting}
      height={32}
      fontSize={14}
      lighter
    >
      Cadastrar Encontro
    </Button>
  );
};

export default LeaderNewMeetingButton;
