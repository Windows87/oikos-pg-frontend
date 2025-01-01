import Card from "../../components/Card";
import ContentsList from "../../components/ContentsList";
import DefaultBackground from "../../components/DefaultBackground";
import MemberNavigationButtons from "../../components/MemberNavigationButtons";
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

const MemberMeeting = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Casamento" subtitle="12 de Janeiro" />
      <ScrollContainer gap={8}>
        <Card title="Informações Gerais" texts={["Tema: Relacionamentos"]} />
        <Card title="Materiais">
          <ContentsList widthContent="100%" contents={contents} />
        </Card>
      </ScrollContainer>
      <MemberNavigationButtons />
    </DefaultBackground>
  );
};

export default MemberMeeting;
