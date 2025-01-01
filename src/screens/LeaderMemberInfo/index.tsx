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
          texts={["Data de Nascimento: 19 de Janeiro de 2003"]}
        />
        <Card
          title="Contato"
          texts={["Email: yfaria@usp.br", "WhatsApp: (35) 992512-1113"]}
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
