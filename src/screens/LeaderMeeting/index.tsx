import Card from "../../components/Card";
import ContentsList from "../../components/ContentsList";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import Content from "../../types/Content";

const contents: Content[] = [
  {
    id: "1",
    name: "Perguntas do PG",
    type: "PDF",
    link: "/meeting/1",
  },
];

const LeaderMeeting = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Casamento" subtitle="12 de Janeiro" />
      <ScrollContainer gap={8}>
        <Card title="Informações Gerais" texts={["Tema: Relacionamentos"]} />
        <Card
          title="Presença"
          texts={[
            "3 de 4 Membros Presentes (75%)",
            "0 Visitantes Presentes",
            "Motivos de Falta: Doente (1)",
          ]}
        />
        <Card title="Materiais">
          <ContentsList widthContent="100%" contents={contents} />
        </Card>
        <Card
          title="Análise do Encontro"
          texts={[
            "Os membros ficaram engajados, participaram bastante e se abriram para compartilhar suas experiências. Ao disponibilizar as perguntas anteriormente foi possível que todos se preparassem para o encontro e trouxessem suas respostas prontas.",
          ]}
        />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMeeting;
