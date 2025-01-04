import { useLocation } from "react-router-dom";
import Card from "../../components/Card";
import ContentsList from "../../components/ContentsList";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import formatDate from "../../utils/formatDate";
import Meeting from "../../types/Meeting";

const LeaderMeeting = () => {
  const location = useLocation();
  const meeting: Meeting = location.state.meeting;

  const getAttendanceStrings = (meeting: Meeting) => {
    const numberOfPresences = meeting.attendance!.filter(
      (attendance) => attendance.attendance_type === "Presente"
    ).length;
    const numberOfVisitants = meeting.attendance!.filter(
      (attendance) => attendance.attendance_type === "Visitante"
    ).length;
    const numberOfMembers = meeting.attendance!.length - numberOfVisitants;
    const percentage = ((numberOfPresences / numberOfMembers) * 100).toFixed(0);

    // @ts-ignore
    const reasons: string[] = meeting
      .attendance!.filter(
        (attendance) => attendance.attendance_type === "Falta"
      )
      .map((attendance) => attendance.absence_reason);

    const reasonsMap = {};

    for (const reason of reasons) {
      if (reason in reasonsMap) {
        // @ts-ignore
        reasonsMap[reason] += 1;
      } else {
        // @ts-ignore
        reasonsMap[reason] = 1;
      }
    }

    const strings = [
      `${numberOfPresences} de ${numberOfMembers} Membro${
        numberOfMembers === 1 ? "" : "s"
      } Presente${numberOfMembers === 1 ? "" : "s"} (${percentage}%)`,
      `${numberOfVisitants} Visitante${
        numberOfVisitants === 1 ? "" : "s"
      } Presente${numberOfVisitants === 1 ? "" : "s"}`,
    ];

    for (const reason in reasonsMap) {
      // @ts-ignore
      strings.push(`${reason} (${reasonsMap[reason]})`);
    }

    return strings;
  };

  return (
    <DefaultBackground gap={16}>
      <PageTitle title={meeting.name} subtitle={formatDate(meeting.date)} />
      <ScrollContainer gap={8}>
        <Card title="Informações Gerais" texts={[`Tema: ${meeting.theme}`]} />
        <Card title="Presença" texts={getAttendanceStrings(meeting)} />
        <Card
          title="Materiais"
          texts={
            !meeting.content!.length
              ? ["Sem materiais do encontro."]
              : undefined
          }
          children={
            meeting.content!.length ? (
              <ContentsList widthContent="100%" contents={meeting.content!} />
            ) : undefined
          }
        />
        <Card title="Análise do Encontro" texts={[meeting.analysis!]} />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMeeting;
