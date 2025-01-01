import Card from "../../components/Card";
import ContentsList from "../../components/ContentsList";
import DefaultBackground from "../../components/DefaultBackground";
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
            "10 de 14 Membros Presentes (71%)",
            "1 Visitante",
            "Motivos de Falta: Doente (2), Prova (1), Viagem (1)",
          ]}
        />
        <Card title="Materiais">
          <ContentsList widthContent="100%" contents={contents} />
        </Card>
        <Card
          title="Análise do Encontro"
          texts={[
            "Os membros ficaram engajados, principalmente os que já tem uma relação de namoro. Como se trata de jovens, o tema não foi tão centrado em detalhes, mas em dúvidas sobre o futuro.",
          ]}
        />
      </ScrollContainer>
    </DefaultBackground>
  );
};

export default LeaderMeeting;
