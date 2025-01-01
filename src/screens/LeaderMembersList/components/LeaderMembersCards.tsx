import styled from "styled-components";
import Card from "../../../components/Card";

const LeaderMembersCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderMembersCards = () => {
  return (
    <LeaderMembersCardsContainer>
      <Card
        title="João"
        texts={["Faltou a 2 PGs Seguidos - Aniversário em 02/Jan"]}
        buttons={[
          {
            text: "Presenças",
            onClick: () => {},
          },
          {
            text: "Perfil",
            onClick: () => {},
          },
        ]}
      />
      <Card
        title="Yuri"
        texts={["Faltou a 2 PGs Seguidos - Aniversário em 02/Jan"]}
        buttons={[
          {
            text: "Presenças",
            onClick: () => {},
          },
          {
            text: "Perfil",
            onClick: () => {},
          },
        ]}
      />
    </LeaderMembersCardsContainer>
  );
};

export default LeaderMembersCards;
