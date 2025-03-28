import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import FirstLeaderNewMeetingForm from "./components/FirstLeaderNewMeetingForm";
import LeaderNewMeetingFormContainer from "./components/LeaderNewMeetingFormContainer";
import SecondLeaderNewMeetingForm from "./components/SecondLeaderNewMeetingForm";
import MeetingContent from "../../types/MeetingContent";
import apiClient from "../../clients/apiClient";
import Meeting from "../../types/Meeting";
import LeaderNewMeetingCancelText from "./components/LeaderNewMeetingCancelText";
import CancelMeetingModal from "./components/CancelMeetingModal";

const LeaderNewMeeting = () => {
  const location = useLocation();
  const meeting: Meeting | undefined = location.state?.meeting;

  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCancelMeetingModalOpen, setIsCancelMeetingModalOpen] =
    useState(false);
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
      if (!meeting) await apiClient.createMeeting({ ...meetingData, contents });
      else
        await apiClient.editMeeting(meeting.id, { ...meetingData, contents });
      sendToLeaderMeetings();
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const handleCancelMeetingClick = () => setIsCancelMeetingModalOpen(true);
  const handleCloseCancelModal = () => setIsCancelMeetingModalOpen(false);
  const sendToLeaderMeetings = () => navigate("/leader/meetings");

  const forms = [
    <FirstLeaderNewMeetingForm
      meeting={meeting}
      onSubmit={onSubmitFirstStep}
    />,
    <SecondLeaderNewMeetingForm
      meeting={meeting}
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
        {meeting ? (
          <LeaderNewMeetingCancelText onClick={handleCancelMeetingClick}>
            Cancelar Encontro
          </LeaderNewMeetingCancelText>
        ) : null}
      </LeaderNewMeetingFormContainer>
      <LeaderNavigationButtons />
      <CancelMeetingModal
        isOpen={isCancelMeetingModalOpen}
        meetingId={meeting?.id}
        onSubmit={sendToLeaderMeetings}
        onClose={handleCloseCancelModal}
      />
    </DefaultBackground>
  );
};

export default LeaderNewMeeting;
