import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";

const LeaderAttendanceListCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderAttendanceListCardsProps {
  onChangeAttendanceClick: (id: number) => void;
}

const LeaderAttendanceListCards = ({
  onChangeAttendanceClick,
}: LeaderAttendanceListCardsProps) => {
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
        title="Bruno"
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
        title="Sarah"
        texts={["Não Preenchido"]}
        buttons={[
          {
            text: "Alterar",
            onClick: () => onChangeAttendanceClick(1),
          },
          {
            text: "Remover",
            onClick: () => {},
          },
        ]}
      />
    </LeaderAttendanceListCardsContainer>
  );
};

export default LeaderAttendanceListCards;
