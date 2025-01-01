import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import LeaderNewMeetingFormContainer from "./components/LeaderNewMeetingFormContainer";
import SecondLeaderNewMeetingForm from "./components/SecondLeaderNewMeetingForm";

const LeaderNewMeeting = () => {
  return (
    <DefaultBackground>
      <PageTitle
        title="Novo Encontro"
        subtitle="Cadastre um novo encontro de PG"
      />
      <LeaderNewMeetingFormContainer>
        <Logo width={30} />
        <SecondLeaderNewMeetingForm />
      </LeaderNewMeetingFormContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderNewMeeting;
