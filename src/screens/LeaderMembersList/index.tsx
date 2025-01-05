import { useEffect, useState } from "react";
import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderMembersCards from "./components/LeaderMembersCards";
import User from "../../types/User";
import apiClient from "../../clients/apiClient";
import LeaderMembersListSkeleton from "./components/LeaderMembersListSkeleton";

const LeaderMembersList = () => {
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMembers = async () => {
    setIsLoading(true);

    try {
      const members = await apiClient.getMembers();
      setMembers(members);
      setIsLoading(false);
    } catch (error: any) {
      alert("Erro ao carregar membros");
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  if (isLoading) return <LeaderMembersListSkeleton />;

  return (
    <DefaultBackground gap={16}>
      <PageTitle
        title="Membros"
        subtitle={`${members.length} Membros Ativos do PG`}
      />
      <ScrollContainer gap={8}>
        <Button width="100%" height={32} fontSize={14} lighter>
          Adicionar Membro
        </Button>
        <LeaderMembersCards members={members} />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMembersList;
