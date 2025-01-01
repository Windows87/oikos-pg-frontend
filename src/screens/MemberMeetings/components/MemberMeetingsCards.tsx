import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";

const MemberMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MemberMeetingsCards = () => {
  return (
    <MemberMeetingsCardsContainer>
      <Card
        title="Casamento"
        texts={["12 de Janeiro"]}
        backgroundColor={theme.yellow.dark}
        buttons={[
          {
            text: "Visualizar",
            onClick: () => {},
            backgroundColor: theme.yellow.medium,
          },
          {
            text: "Marcar Presença",
            onClick: () => {},
            backgroundColor: theme.yellow.medium,
          },
        ]}
      />
      <Card
        title="Família"
        texts={["5 de Janeiro - 12 Presentes"]}
        buttons={[
          {
            text: "Visualizar",
            onClick: () => {},
          },
        ]}
      />
    </MemberMeetingsCardsContainer>
  );
};

export default MemberMeetingsCards;
