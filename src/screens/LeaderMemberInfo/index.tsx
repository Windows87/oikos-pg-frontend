import Button from "../../components/Button";
import Card from "../../components/Card";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import { useLocation, useNavigate } from "react-router-dom";
import User from "../../types/User";
import formatDate from "../../utils/formatDate";
import { useState } from "react";
import apiClient from "../../clients/apiClient";

const LeaderMemberInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDeleting, setIsDeleting] = useState(false);

  const member: User = location.state.member;

  const handleClick = async () => {
    setIsDeleting(true);
    try {
      await apiClient.deleteMember(member.id);
      goToMembersList();
    } catch (error: any) {
      alert("Erro ao remover membro");
      setIsDeleting(false);
    }
  };

  const goToMembersList = () => navigate("/leader/members");

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
        <Button
          lighter
          width="100%"
          height={32}
          fontSize={14}
          onClick={handleClick}
        >
          {isDeleting ? "Removendo.." : "Remover do PG"}
        </Button>
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMemberInfo;
