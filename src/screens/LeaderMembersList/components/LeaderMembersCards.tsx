import styled from "styled-components";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";

const LeaderMembersCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderMembersCards = () => {
  const navigate = useNavigate();

  const goToMemberAttendance = () => navigate("/leader/member/attendance");
  const goToMemberInfo = () => navigate("/leader/member/info");

  return (
    <LeaderMembersCardsContainer>
      <Card
        title="Yuri Faria"
        texts={["Faltou a 0 PGs Seguidos - Aniversário em 19/Jan"]}
        buttons={[
          {
            text: "Presenças",
            onClick: goToMemberAttendance,
          },
          {
            text: "Perfil",
            onClick: goToMemberInfo,
          },
        ]}
      />
      <Card
        title="Couto Lenda"
        texts={["Faltou a 1 PGs Seguido - Aniversário em 10/Mar"]}
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
        title="Bruno"
        texts={["Faltou a 0 PGs Seguidos - Aniversário em 15/Jul"]}
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
        title="Sarah"
        texts={["Faltou a 0 PGs Seguidos - Aniversário em 30/Out"]}
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
