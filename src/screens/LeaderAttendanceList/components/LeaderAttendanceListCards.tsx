import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";
import MeetingAttendance from "../../../types/MeetingAttendance";
import attendanceTypeToTheme from "../../../settings/attendanceTypeToTheme";

const LeaderAttendanceListCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderAttendanceListCardsProps {
  attendance: MeetingAttendance[];
  onChangeAttendanceClick: (id: number) => void;
}

const LeaderAttendanceListCards = ({
  attendance,
  onChangeAttendanceClick,
}: LeaderAttendanceListCardsProps) => {
  const getAttendeeText = (attendee: MeetingAttendance): string => {
    if (attendee.absence_reason) {
      return `${attendee.attendance_type} - ${attendee.absence_reason}`;
    }
    return attendee.attendance_type;
  };

  return (
    <LeaderAttendanceListCardsContainer>
      {attendance.map((attendee) => (
        <Card
          title={attendee.user ? attendee.user.name : attendee.visitor_name!}
          texts={[getAttendeeText(attendee)]}
          // @ts-ignore
          backgroundColor={attendanceTypeToTheme[attendee.attendance_type].dark}
          buttons={[
            {
              text: "Alterar",
              onClick: () => {},
              backgroundColor:
                // @ts-ignore
                attendanceTypeToTheme[attendee.attendance_type].medium,
            },
            {
              text: "Remover",
              onClick: () => {},

              backgroundColor:
                // @ts-ignore
                attendanceTypeToTheme[attendee.attendance_type].medium,
            },
          ]}
        />
      ))}
    </LeaderAttendanceListCardsContainer>
  );
};

export default LeaderAttendanceListCards;
