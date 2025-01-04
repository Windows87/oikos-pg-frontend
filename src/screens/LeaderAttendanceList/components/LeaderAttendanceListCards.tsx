import styled from "styled-components";
import Card from "../../../components/Card";
import MeetingAttendance from "../../../types/MeetingAttendance";
import attendanceTypeToTheme from "../../../settings/attendanceTypeToTheme";
import ChangeAttendanceModal from "../../../components/ChangeAttendanceModal";
import { useState } from "react";

const LeaderAttendanceListCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderAttendanceListCardsProps {
  onSubmitChangeAttendance: (newMeetingAttendance: MeetingAttendance) => void;
  attendance: MeetingAttendance[];
}

const LeaderAttendanceListCards = ({
  onSubmitChangeAttendance,
  attendance,
}: LeaderAttendanceListCardsProps) => {
  const [changeAttendance, setChangeAttendance] = useState<
    MeetingAttendance | undefined
  >(undefined);

  const closeChangeAttendanceModal = () => setChangeAttendance(undefined);

  const getAttendeeText = (attendee: MeetingAttendance): string => {
    if (attendee.absence_reason) {
      return `${attendee.attendance_type} - ${attendee.absence_reason}`;
    }
    return attendee.attendance_type;
  };

  const handleChangeAttendance = () => {};

  return (
    <>
      <LeaderAttendanceListCardsContainer>
        {attendance.map((attendee) => (
          <Card
            title={attendee.user ? attendee.user.name : attendee.visitor_name!}
            texts={[getAttendeeText(attendee)]}
            backgroundColor={
              // @ts-ignore
              attendanceTypeToTheme[attendee.attendance_type].dark
            }
            buttons={[
              {
                text: "Alterar",
                onClick: () => setChangeAttendance(attendee),
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
      <ChangeAttendanceModal
        attendance={changeAttendance}
        isOpen={!!changeAttendance}
        onSubmit={onSubmitChangeAttendance}
        onClose={closeChangeAttendanceModal}
      />
    </>
  );
};

export default LeaderAttendanceListCards;
