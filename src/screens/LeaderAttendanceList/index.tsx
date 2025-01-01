import { useState } from "react";
import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderAddAttendanceModal from "./components/LeaderAddAttendanceModal";
import LeaderAttendanceListCards from "./components/LeaderAttendanceListCards";
import ChangeAttendanceModal from "../../components/ChangeAttendanceModal";

const LeaderAttendanceList = () => {
  const [changeAttendanceId, setChangeAttendanceId] = useState<number | null>(
    null
  );
  const [isAddAttendanceModalOpen, setIsAddAttendanceModalOpen] =
    useState(false);

  const handleAddNewVisitorButton = () => setIsAddAttendanceModalOpen(true);
  const handleCloseAddAttendanceModal = () =>
    setIsAddAttendanceModalOpen(false);

  const closeChangeAttendanceModal = () => setChangeAttendanceId(null);

  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Casamento" subtitle="12 de Janeiro" />
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
          onChangeAttendanceClick={setChangeAttendanceId}
        />
      </ScrollContainer>
      <LeaderNavigationButtons />
      <LeaderAddAttendanceModal
        isOpen={isAddAttendanceModalOpen}
        onClose={handleCloseAddAttendanceModal}
      />
      <ChangeAttendanceModal
        isOpen={!!changeAttendanceId}
        onClose={closeChangeAttendanceModal}
      />
    </DefaultBackground>
  );
};

export default LeaderAttendanceList;
