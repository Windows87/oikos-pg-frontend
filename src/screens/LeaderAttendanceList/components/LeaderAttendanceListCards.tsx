import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";

const LeaderAttendanceListCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderAttendanceListCards = () => {
  return (
    <LeaderAttendanceListCardsContainer>
      <Card
        title="Yuri Faria"
        texts={["Presente"]}
        backgroundColor={theme.green.dark}
        buttons={[
          {
            text: "Alterar",
            onClick: () => {},
            backgroundColor: theme.green.medium,
          },
          {
            text: "Remover",
            onClick: () => {},
            backgroundColor: theme.green.medium,
          },
        ]}
      />
      <Card
        title="Couto Lenda"
        texts={["Visitante"]}
        backgroundColor={theme.green.dark}
        buttons={[
          {
            text: "Alterar",
            onClick: () => {},
            backgroundColor: theme.green.medium,
          },
          {
            text: "Remover",
            onClick: () => {},
            backgroundColor: theme.green.medium,
          },
        ]}
      />
    </LeaderAttendanceListCardsContainer>
  );
};

export default LeaderAttendanceListCards;
