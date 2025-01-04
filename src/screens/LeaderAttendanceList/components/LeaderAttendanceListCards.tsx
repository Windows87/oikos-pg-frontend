import styled from "styled-components";
import Card from "../../../components/Card";
import MeetingAttendance from "../../../types/MeetingAttendance";
import attendanceTypeToTheme from "../../../settings/attendanceTypeToTheme";
import ChangeAttendanceModal from "../../../components/ChangeAttendanceModal";
import { useState } from "react";
import apiClient from "../../../clients/apiClient";

const LeaderAttendanceListCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderAttendanceListCardsProps {
  onSubmitChangeAttendance: (newMeetingAttendance: MeetingAttendance) => void;
  onSubmitRemoveAttendance: (attendance: MeetingAttendance) => void;
  attendance: MeetingAttendance[];
}

const LeaderAttendanceListCards = ({
  onSubmitChangeAttendance,
  onSubmitRemoveAttendance,
  attendance,
}: LeaderAttendanceListCardsProps) => {
  const [changeAttendance, setChangeAttendance] = useState<
    MeetingAttendance | undefined
  >(undefined);
  const [removingAttendance, setRemovingAttendance] = useState<
    MeetingAttendance | undefined
  >(undefined);

  const closeChangeAttendanceModal = () => setChangeAttendance(undefined);

  const getAttendeeText = (attendee: MeetingAttendance): string => {
    if (attendee.absence_reason) {
      return `${attendee.attendance_type} - ${attendee.absence_reason}`;
    }
    return attendee.attendance_type;
  };

  const removeAttendance = async (attendance: MeetingAttendance) => {
    if (removingAttendance) return;
    setRemovingAttendance(attendance);

    try {
      await apiClient.removeAttendance(attendance.id);
      onSubmitRemoveAttendance(attendance);
    } catch (error: any) {
      alert(error.message);
    }

    setRemovingAttendance(undefined);
  };

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
                text:
                  removingAttendance?.id === attendee.id
                    ? "Removendo.."
                    : "Remover",
                onClick: () => removeAttendance(attendee),
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
