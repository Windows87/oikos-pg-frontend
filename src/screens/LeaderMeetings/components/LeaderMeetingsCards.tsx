import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";
import { useNavigate } from "react-router-dom";
import LeaderFinishMeetingModal from "./LeaderFinishMeetingModal";
import { useState } from "react";
import Meeting from "../../../types/Meeting";
import formatDate from "../../../utils/formatDate";
import MeetingAttendance from "../../../types/MeetingAttendance";

const LeaderMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderMeetingsCardsProps {
  meetings: Meeting[];
  onFinishMeeting: () => void;
}

const countMissingAttendances = (attendanceList: MeetingAttendance[]) => {
  return attendanceList.filter(
    (attendance) => attendance.attendance_type === "Não Preenchido"
  ).length;
};

const formatAttendanceString = (attendanceList: MeetingAttendance[]) => {
  const numberOfPresents = attendanceList.filter(
    (attendance) => attendance.attendance_type === "Presente"
  ).length;
  const numberOfVisitants = attendanceList.filter(
    (attendance) => attendance.attendance_type === "Visitante"
  ).length;
  let string =
    numberOfPresents === 1 ? `1 Presente` : `${numberOfPresents} Presentes`;
  const visitantsString =
    numberOfVisitants === 1 ? `1 Visitante` : `${numberOfVisitants} Visitantes`;
  const missingAttendancesString =
    countMissingAttendances(attendanceList) === 1
      ? `(1 Pendente)`
      : `(${countMissingAttendances(attendanceList)} Pendentes)`;

  if (countMissingAttendances(attendanceList))
    string += ` ${missingAttendancesString}`;
  if (numberOfVisitants) string += ` e ${visitantsString}`;

  return string;
};

const LeaderMeetingsCards = ({
  meetings,
  onFinishMeeting,
}: LeaderMeetingsCardsProps) => {
  const navigate = useNavigate();
  const [finishMeetingId, setFinishMeetingId] = useState<number | undefined>(
    undefined
  );

  const handleCloseFinishMeetingModal = () => setFinishMeetingId(undefined);

  const goToMeetingInfo = (meeting: Meeting) =>
    navigate("/leader/meeting/", {
      state: { meeting },
    });

  const goToEditMeeting = (meeting: Meeting) =>
    navigate("/leader/meeting/new", {
      state: { meeting },
    });

  const goToAttendanceList = (meeting: Meeting) =>
    navigate("/leader/meeting/attendance", {
      state: { meeting },
    });

  const handleFinishMeeting = (meeting: Meeting) => {
    if (countMissingAttendances(meeting.attendance!))
      return alert(
        "Não é possível finalizar a reunião com presenças pendentes."
      );
    setFinishMeetingId(meeting.id);
  };

  return (
    <>
      <LeaderMeetingsCardsContainer>
        {meetings.map((meeting) => (
          <Card
            title={meeting.name}
            texts={[
              `${formatDate(meeting.date)} - ${formatAttendanceString(
                meeting.attendance!
              )}`,
            ]}
            backgroundColor={!meeting.analysis ? theme.yellow.dark : undefined}
            buttons={
              !meeting.analysis
                ? [
                    {
                      text: "Editar",
                      onClick: () => goToEditMeeting(meeting),
                      backgroundColor: theme.yellow.medium,
                    },
                    {
                      text: "Finalizar",
                      onClick: () => handleFinishMeeting(meeting),
                      backgroundColor: theme.yellow.medium,
                    },
                    {
                      text: "Presenças",
                      onClick: () => goToAttendanceList(meeting),
                      backgroundColor: theme.yellow.medium,
                    },
                  ]
                : [
                    {
                      text: "Visualizar",
                      onClick: () => goToMeetingInfo(meeting),
                    },
                    {
                      text: "Presenças",
                      onClick: () => goToAttendanceList(meeting),
                    },
                  ]
            }
          />
        ))}
      </LeaderMeetingsCardsContainer>
      <LeaderFinishMeetingModal
        isOpen={!!finishMeetingId}
        meetingId={finishMeetingId}
        onSubmit={onFinishMeeting}
        onClose={handleCloseFinishMeetingModal}
      />
    </>
  );
};

export default LeaderMeetingsCards;
