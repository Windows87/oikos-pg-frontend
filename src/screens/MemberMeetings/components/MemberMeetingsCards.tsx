import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";
import ChangeAttendanceModal from "../../../components/ChangeAttendanceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Meeting from "../../../types/Meeting";
import formatDate from "../../../utils/formatDate";

const MemberMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface MemberMeetingsCardsProps {
  meetings: Meeting[];
}

const MemberMeetingsCards = ({ meetings }: MemberMeetingsCardsProps) => {
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
        {meetings.map((meeting) => (
          <Card
            title={meeting.name}
            texts={[formatDate(meeting.date)]}
            backgroundColor={
              meeting.attendance![0].attendance_type === "Não Preenchido"
                ? theme.yellow.dark
                : undefined
            }
            buttons={
              meeting.attendance![0].attendance_type === "Não Preenchido"
                ? [
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
                  ]
                : [
                    {
                      text: "Visualizar",
                      onClick: goToMeetinginfo,
                    },
                  ]
            }
          />
        ))}
      </MemberMeetingsCardsContainer>
    </>
  );
};

export default MemberMeetingsCards;
