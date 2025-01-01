import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";

const LeaderMemberAttendancesCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderMemberAttendancesCards = () => {
  return (
    <LeaderMemberAttendancesCardsContainer>
      <Card
        title="Casamento"
        backgroundColor={theme.green.dark}
        texts={["12 de Janeiro", "Presente"]}
      />
    </LeaderMemberAttendancesCardsContainer>
  );
};

export default LeaderMemberAttendancesCards;
