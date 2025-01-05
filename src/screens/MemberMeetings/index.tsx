import { useEffect, useState } from "react";
import DefaultBackground from "../../components/DefaultBackground";
import MemberNavigationButtons from "../../components/MemberNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import MemberMeetingsCards from "./components/MemberMeetingsCards";
import Meeting from "../../types/Meeting";
import apiClient from "../../clients/apiClient";
import MemberMeetingsSkeleton from "./components/MemberMeetingsSkeleton";

const MemberMeetings = () => {
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

  if (isLoading) return <MemberMeetingsSkeleton />;

  const numberOfMeetingsOfYear = getNumberOfMeetingsOfYear(meetings);

  return (
    <DefaultBackground gap={16}>
      <PageTitle
        title="Encontros"
        subtitle={`${numberOfMeetingsOfYear} Encontro${
          numberOfMeetingsOfYear === 1 ? "" : "s"
        } em em ${new Date().getFullYear()}!`}
      />
      <ScrollContainer gap={8}>
        <MemberMeetingsCards meetings={meetings} />
      </ScrollContainer>
      <MemberNavigationButtons />
    </DefaultBackground>
  );
};

export default MemberMeetings;
