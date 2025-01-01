import DefaultBackground from "../../components/DefaultBackground";
import MemberNavigationButtons from "../../components/MemberNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import MemberMeetingsCards from "./components/MemberMeetingsCards";

const MemberMeetings = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Encontros" subtitle="2 Encontros em 2025!" />
      <ScrollContainer gap={8}>
        <MemberMeetingsCards />
      </ScrollContainer>
      <MemberNavigationButtons />
    </DefaultBackground>
  );
};

export default MemberMeetings;
