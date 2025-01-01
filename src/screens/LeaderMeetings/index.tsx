import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderMeetingsCards from "./components/LeaderMeetingsCards";
import LeaderNewMeetingButton from "./components/LeaderNewMeetingButton";

const LeaderMeetings = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Encontros" subtitle="2 Encontros em 2025!" />
      <ScrollContainer gap={8}>
        <LeaderNewMeetingButton />
        <LeaderMeetingsCards />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMeetings;
