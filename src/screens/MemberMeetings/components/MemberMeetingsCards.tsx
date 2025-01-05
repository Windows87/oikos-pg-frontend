import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";
import ChangeAttendanceModal from "../../../components/ChangeAttendanceModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Meeting from "../../../types/Meeting";
import formatDate from "../../../utils/formatDate";
import MeetingAttendance from "../../../types/MeetingAttendance";

const MemberMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface MemberMeetingsCardsProps {
  meetings: Meeting[];
  onUpdateAttendance: () => void;
}

const MemberMeetingsCards = ({
  meetings,
  onUpdateAttendance,
}: MemberMeetingsCardsProps) => {
  const navigate = useNavigate();
  const [meetingSetAttendance, setMeetingSetAttendance] =
    useState<MeetingAttendance | null>(null);

  const handleCloseChangeAttendanceModal = () => setMeetingSetAttendance(null);
  const goToMeetingInfo = (meeting: Meeting) =>
    navigate("/member/meeting", { state: { meeting } });

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
                      onClick: () => goToMeetingInfo(meeting),
                      backgroundColor: theme.yellow.medium,
                    },
                    {
                      text: "Marcar Presença",
                      onClick: () =>
                        setMeetingSetAttendance(meeting.attendance![0]),
                      backgroundColor: theme.yellow.medium,
                    },
                  ]
                : [
                    {
                      text: "Visualizar",
                      onClick: () => goToMeetingInfo(meeting),
                    },
                  ]
            }
          />
        ))}
      </MemberMeetingsCardsContainer>
      <ChangeAttendanceModal
        isOpen={!!meetingSetAttendance}
        onClose={handleCloseChangeAttendanceModal}
        attendance={meetingSetAttendance!}
        onSubmit={onUpdateAttendance}
      />
    </>
  );
};

export default MemberMeetingsCards;
