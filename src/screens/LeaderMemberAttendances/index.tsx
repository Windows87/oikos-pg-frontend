import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import User from "../../types/User";
import calculateNumberOfSequentialAbsences from "../../utils/calculateNumberOfSequentialAbsences";
import LeaderMemberAttendancesCards from "./components/LeaderMemberAttendancesCards";
import { useLocation } from "react-router-dom";

const LeaderMemberAttendances = () => {
  const location = useLocation();

  const member: User = location.state.member;

  const numberOfSequentialAbsences = calculateNumberOfSequentialAbsences(
    member.attendance!
  );
  const subtitle = `Faltou a ${numberOfSequentialAbsences} PG${
    numberOfSequentialAbsences !== 1 ? "s" : ""
  } Seguido${numberOfSequentialAbsences !== 1 ? "s" : ""}`;

  return (
    <DefaultBackground gap={16}>
      <PageTitle title={member.name} subtitle={subtitle} />
      <ScrollContainer gap={8}>
        <LeaderMemberAttendancesCards attendances={member.attendance!} />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMemberAttendances;
