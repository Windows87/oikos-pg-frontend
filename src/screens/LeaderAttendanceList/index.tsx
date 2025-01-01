import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderAddAttendanceModal from "./components/LeaderAddAttendanceModal";
import LeaderAttendanceListCards from "./components/LeaderAttendanceListCards";

const LeaderAttendanceList = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Casamento" subtitle="12 de Janeiro" />
      <ScrollContainer gap={8}>
        <Button width="100%" height={32} fontSize={14} lighter>
          Adicionar Visitante
        </Button>
        <LeaderAttendanceListCards />
      </ScrollContainer>
      <LeaderNavigationButtons />
      <LeaderAddAttendanceModal />
    </DefaultBackground>
  );
};

export default LeaderAttendanceList;
