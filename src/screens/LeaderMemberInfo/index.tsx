import Button from "../../components/Button";
import Card from "../../components/Card";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";

const LeaderMemberInfo = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Yuri Faria" subtitle="Membro" />
      <ScrollContainer gap={8}>
        <Card
          title="Dados Pessoais"
          texts={["Data de Nascimento: 2 de Janeiro de 1998"]}
        />
        <Card
          title="Contato"
          texts={["Email: yfaria@usp.br", "WhatsApp: (XX) XXXXX-XXXX"]}
        />
        <Button lighter width="100%" height={32} fontSize={14}>
          Remover do PG
        </Button>
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMemberInfo;
