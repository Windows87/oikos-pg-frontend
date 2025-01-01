import { useState } from "react";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import FirstLeaderNewMeetingForm from "./components/FirstLeaderNewMeetingForm";
import LeaderNewMeetingFormContainer from "./components/LeaderNewMeetingFormContainer";
import SecondLeaderNewMeetingForm from "./components/SecondLeaderNewMeetingForm";

const LeaderNewMeeting = () => {
  const [formStep, setFormStep] = useState(0);

  const onSubmitFirstStep = () => {
    setFormStep(1);
  };

  const forms = [
    <FirstLeaderNewMeetingForm onSubmit={onSubmitFirstStep} />,
    <SecondLeaderNewMeetingForm />,
  ];

  return (
    <DefaultBackground>
      <PageTitle
        title="Novo Encontro"
        subtitle="Cadastre um novo encontro de PG"
      />
      <LeaderNewMeetingFormContainer>
        <Logo width={30} />
        {forms[formStep]}
      </LeaderNewMeetingFormContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderNewMeeting;
