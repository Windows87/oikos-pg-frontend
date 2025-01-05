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
import LeaderAddMemberModal from "./components/LeaderAddMemberModal";

const LeaderMembersList = () => {
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);

  const closeNewMemberModal = () => setIsNewMemberModalOpen(false);

  const fetchMembers = async () => {
    setIsLoading(true);

    try {
      const members = await apiClient.getMembers();
      setMembers(members);
      setIsLoading(false);
    } catch (error: any) {
      alert(error.message);
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
        <Button
          width="100%"
          height={32}
          fontSize={14}
          lighter
          onClick={() => setIsNewMemberModalOpen(true)}
        >
          Adicionar Membro
        </Button>
        <LeaderMembersCards members={members} />
      </ScrollContainer>
      <LeaderNavigationButtons />
      <LeaderAddMemberModal
        isOpen={isNewMemberModalOpen}
        onClose={closeNewMemberModal}
        onNewMember={fetchMembers}
      />
    </DefaultBackground>
  );
};

export default LeaderMembersList;
