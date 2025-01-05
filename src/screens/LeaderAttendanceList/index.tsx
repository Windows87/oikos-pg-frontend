import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderAddAttendanceModal from "./components/LeaderAddAttendanceModal";
import LeaderAttendanceListCards from "./components/LeaderAttendanceListCards";
import Meeting from "../../types/Meeting";
import formatDate from "../../utils/formatDate";
import MeetingAttendance from "../../types/MeetingAttendance";

const LeaderAttendanceList = () => {
  const location = useLocation();
  const [meeting, setMeeting] = useState<Meeting>(location.state.meeting);
  const [isAddAttendanceModalOpen, setIsAddAttendanceModalOpen] =
    useState(false);

  const handleChangeAttendance = (attendance: MeetingAttendance) => {
    const newAttendance = meeting.attendance!.map((a) =>
      a.id === attendance.id ? attendance : a
    );
    setMeeting({ ...meeting, attendance: newAttendance });
  };

  const handleRemoveAttendance = (attendance: MeetingAttendance) => {
    const newAttendance = meeting.attendance!.filter(
      (a) => a.id !== attendance.id
    );
    setMeeting({ ...meeting, attendance: newAttendance });
  };

  const handleNewAttendance = (attendance: MeetingAttendance) => {
    console.log(attendance);
    setMeeting({
      ...meeting,
      attendance: [...meeting.attendance!, attendance],
    });
  };

  const handleAddNewVisitorButton = () => setIsAddAttendanceModalOpen(true);
  const handleCloseAddAttendanceModal = () =>
    setIsAddAttendanceModalOpen(false);

  return (
    <DefaultBackground gap={16}>
      <PageTitle title={meeting.name} subtitle={formatDate(meeting.date)} />
      <ScrollContainer gap={8}>
        <Button
          width="100%"
          height={32}
          fontSize={14}
          lighter
          onClick={handleAddNewVisitorButton}
        >
          Adicionar Visitante
        </Button>
        <LeaderAttendanceListCards
          onSubmitRemoveAttendance={handleRemoveAttendance}
          onSubmitChangeAttendance={handleChangeAttendance}
          attendance={meeting.attendance!}
        />
      </ScrollContainer>
      <LeaderNavigationButtons />
      <LeaderAddAttendanceModal
        meeting={meeting}
        isOpen={isAddAttendanceModalOpen}
        onClose={handleCloseAddAttendanceModal}
        onNewAttendance={handleNewAttendance}
      />
    </DefaultBackground>
  );
};

export default LeaderAttendanceList;
