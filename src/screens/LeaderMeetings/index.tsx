import { useEffect, useState } from "react";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderMeetingsCards from "./components/LeaderMeetingsCards";
import LeaderNewMeetingButton from "./components/LeaderNewMeetingButton";
import LeaderMeetingsSkeleton from "./components/LeaderMeetingsSkeleton";
import apiClient from "../../clients/apiClient";
import Meeting from "../../types/Meeting";

const LeaderMeetings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  const fetchMeetings = async () => {
    setIsLoading(true);

    try {
      const meetings = await apiClient.getMeetings();
      setMeetings(meetings);
    } catch (error: any) {
      alert(error.message);
    }

    setIsLoading(false);
  };

  const getNumberOfMeetingsOfYear = (meetings: Meeting[]) => {
    const currentYear = new Date().getFullYear();
    return meetings.filter(
      (meeting) => new Date(meeting.date).getFullYear() === currentYear
    ).length;
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  if (isLoading) return <LeaderMeetingsSkeleton />;

  return (
    <DefaultBackground gap={16}>
      <PageTitle
        title="Encontros"
        subtitle={`${getNumberOfMeetingsOfYear(
          meetings
        )} Encontros em ${new Date().getFullYear()}!`}
      />
      <ScrollContainer gap={8}>
        <LeaderNewMeetingButton />
        <LeaderMeetingsCards
          onFinishMeeting={fetchMeetings}
          meetings={meetings}
        />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMeetings;
