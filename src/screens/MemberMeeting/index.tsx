import { useLocation } from "react-router-dom";
import Card from "../../components/Card";
import ContentsList from "../../components/ContentsList";
import DefaultBackground from "../../components/DefaultBackground";
import MemberNavigationButtons from "../../components/MemberNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import Meeting from "../../types/Meeting";
import formatDate from "../../utils/formatDate";

const MemberMeeting = () => {
  const location = useLocation();
  const meeting: Meeting = location.state.meeting;

  return (
    <DefaultBackground gap={16}>
      <PageTitle title={meeting.name} subtitle={formatDate(meeting.date)} />
      <ScrollContainer gap={8}>
        <Card title="Informações Gerais" texts={[`Tema: ${meeting.theme}`]} />
        <Card title="Materiais">
          <ContentsList widthContent="100%" contents={meeting.content} />
        </Card>
      </ScrollContainer>
      <MemberNavigationButtons />
    </DefaultBackground>
  );
};

export default MemberMeeting;
