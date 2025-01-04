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

  useEffect(() => {
    fetchMeetings();
  }, []);

  if (isLoading) return <LeaderMeetingsSkeleton />;

  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Encontros" subtitle="2 Encontros em 2025!" />
      <ScrollContainer gap={8}>
        <LeaderNewMeetingButton />
        <LeaderMeetingsCards meetings={meetings} />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMeetings;
