import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderFinishMeetingModal from "./components/LeaderFinishMeetingModal";
import LeaderMeetingsCards from "./components/LeaderMeetingsCards";

const LeaderMeetings = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Encontros" subtitle="2 Encontros em 2025!" />
      <ScrollContainer gap={8}>
        <Button width="100%" height={32} fontSize={14} lighter>
          Cadastrar Encontro
        </Button>
        <LeaderMeetingsCards />
      </ScrollContainer>
      <LeaderNavigationButtons />
      <LeaderFinishMeetingModal />
    </DefaultBackground>
  );
};

export default LeaderMeetings;
