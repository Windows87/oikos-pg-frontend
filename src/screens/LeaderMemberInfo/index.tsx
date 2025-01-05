import Button from "../../components/Button";
import Card from "../../components/Card";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import { useLocation } from "react-router-dom";
import User from "../../types/User";
import formatDate from "../../utils/formatDate";

const LeaderMemberInfo = () => {
  const location = useLocation();
  const member: User = location.state.member;

  return (
    <DefaultBackground gap={16}>
      <PageTitle title={member.name} subtitle="Membro" />
      <ScrollContainer gap={8}>
        <Card
          title="Dados Pessoais"
          texts={[`Data de Nascimento: ${formatDate(member.birthday!)}`]}
        />
        <Card
          title="Contato"
          texts={[`Email: ${member.email}`, `WhatsApp: ${member.whatsapp}`]}
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
