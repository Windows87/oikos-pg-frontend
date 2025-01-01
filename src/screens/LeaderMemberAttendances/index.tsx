import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderMemberAttendancesCards from "./components/LeaderMemberAttendancesCards";

const LeaderMemberAttendances = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Yuri Faria" subtitle="Faltou a 2 PGs Seguidos" />
      <ScrollContainer gap={8}>
        <LeaderMemberAttendancesCards />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMemberAttendances;
