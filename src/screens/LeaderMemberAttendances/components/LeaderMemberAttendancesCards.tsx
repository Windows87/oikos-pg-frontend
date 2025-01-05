import styled from "styled-components";
import Card from "../../../components/Card";
import MeetingAttendance from "../../../types/MeetingAttendance";
import formatDate from "../../../utils/formatDate";
import attendanceTypeToTheme from "../../../settings/attendanceTypeToTheme";

const LeaderMemberAttendancesCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderMemberAttendancesCardsProps {
  attendances: MeetingAttendance[];
}

const LeaderMemberAttendancesCards = ({
  attendances,
}: LeaderMemberAttendancesCardsProps) => {
  return (
    <LeaderMemberAttendancesCardsContainer>
      {attendances.map((attendance) => (
        <Card
          title={attendance.meeting!.name}
          texts={[
            formatDate(attendance.meeting!.date),
            attendance.attendance_type,
          ]}
          backgroundColor={
            // @ts-ignore
            attendanceTypeToTheme[attendance.attendance_type].dark
          }
        />
      ))}
    </LeaderMemberAttendancesCardsContainer>
  );
};

export default LeaderMemberAttendancesCards;
