import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";
import { useNavigate } from "react-router-dom";
import LeaderFinishMeetingModal from "./LeaderFinishMeetingModal";
import { useState } from "react";

const LeaderMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderMeetingsCards = () => {
  const navigate = useNavigate();
  const [finishMeetingId, setFinishMeetingId] = useState<number | null>(null);

  const handleCloseFinishMeetingModal = () => setFinishMeetingId(null);
  const goToAttendanceList = () => navigate("/leader/meeting/attendance");
  const goToMeetingInfo = () => navigate("/leader/meeting/");

  return (
    <>
      <LeaderMeetingsCardsContainer>
        <Card
          title="Casamento"
          texts={["12 de Janeiro - 3 Presentes - 1 Pendente"]}
          backgroundColor={theme.yellow.dark}
          buttons={[
            {
              text: "Editar",
              onClick: () => {},
              backgroundColor: theme.yellow.medium,
            },
            {
              text: "Finalizar",
              onClick: () => setFinishMeetingId(1),
              backgroundColor: theme.yellow.medium,
            },
            {
              text: "Presenças",
              onClick: goToAttendanceList,
              backgroundColor: theme.yellow.medium,
            },
          ]}
        />
        <Card
          title="Família"
          texts={["5 de Janeiro - 3 Presentes"]}
          buttons={[
            {
              text: "Visualizar",
              onClick: goToMeetingInfo,
            },
            {
              text: "Presenças",
              onClick: () => {},
            },
          ]}
        />
      </LeaderMeetingsCardsContainer>
      <LeaderFinishMeetingModal
        isOpen={!!finishMeetingId}
        onClose={handleCloseFinishMeetingModal}
      />
    </>
  );
};

export default LeaderMeetingsCards;
