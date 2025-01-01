import Button from "../../components/Button";
import DefaultBackground from "../../components/DefaultBackground";
import LeaderNavigationButtons from "../../components/LeaderNavigationButtons";
import PageTitle from "../../components/PageTitle";
import ScrollContainer from "../../components/ScrollContainer";
import LeaderMembersCards from "./components/LeaderMembersCards";

const LeaderMembersList = () => {
  return (
    <DefaultBackground gap={16}>
      <PageTitle title="Membros" subtitle="14 Membros Ativos do PG" />
      <ScrollContainer gap={8}>
        <Button width="100%" height={32} fontSize={14} lighter>
          Adicionar Membro
        </Button>
        <LeaderMembersCards />
      </ScrollContainer>
      <LeaderNavigationButtons />
    </DefaultBackground>
  );
};

export default LeaderMembersList;
