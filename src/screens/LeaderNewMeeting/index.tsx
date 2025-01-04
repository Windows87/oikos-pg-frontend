import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import FirstLeaderNewMeetingForm from "./components/FirstLeaderNewMeetingForm";
import LeaderNewMeetingFormContainer from "./components/LeaderNewMeetingFormContainer";
import SecondLeaderNewMeetingForm from "./components/SecondLeaderNewMeetingForm";
import MeetingContent from "../../types/MeetingContent";
import apiClient from "../../clients/apiClient";

const LeaderNewMeeting = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [meetingData, setMeetingData] = useState({
    name: "",
    date: "",
    theme: "",
  });

  const onSubmitFirstStep = (name: string, date: string, theme: string) => {
    setMeetingData({
      name,
      date,
      theme,
    });
    setFormStep(1);
  };

  const onSubmitSecondStep = async (contents: MeetingContent[]) => {
    setIsLoading(true);
    try {
      await apiClient.createMeeting({ ...meetingData, contents });
      sendToLeaderMeetings();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const sendToLeaderMeetings = () => navigate("/leader/meetings");

  const forms = [
    <FirstLeaderNewMeetingForm onSubmit={onSubmitFirstStep} />,
    <SecondLeaderNewMeetingForm
      onSubmit={onSubmitSecondStep}
      isLoading={isLoading}
    />,
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
