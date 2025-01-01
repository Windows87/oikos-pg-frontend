import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";
import ChangeAttendanceModal from "../../../components/ChangeAttendanceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MemberMeetingsCards = () => {
  const navigate = useNavigate();
  const [meetingSetAttendanceId, setMeetingSetAttendanceId] = useState<
    number | null
  >(null);

  const handleCloseChangeAttendanceModal = () =>
    setMeetingSetAttendanceId(null);
  const goToMeetinginfo = () => navigate("/member/meeting");

  return (
    <>
      <MemberMeetingsCardsContainer>
        <Card
          title="Casamento"
          texts={["12 de Janeiro"]}
          backgroundColor={theme.yellow.dark}
          buttons={[
            {
              text: "Visualizar",
              onClick: goToMeetinginfo,
              backgroundColor: theme.yellow.medium,
            },
            {
              text: "Marcar Presença",
              onClick: () => setMeetingSetAttendanceId(1),
              backgroundColor: theme.yellow.medium,
            },
          ]}
        />
        <Card
          title="Família"
          texts={["5 de Janeiro - 12 Presentes"]}
          buttons={[
            {
              text: "Visualizar",
              onClick: () => {},
            },
          ]}
        />
      </MemberMeetingsCardsContainer>
      <ChangeAttendanceModal
        isOpen={!!meetingSetAttendanceId}
        onClose={handleCloseChangeAttendanceModal}
      />
    </>
  );
};

export default MemberMeetingsCards;
