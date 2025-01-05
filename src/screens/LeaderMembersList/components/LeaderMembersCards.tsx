import styled from "styled-components";
import Card from "../../../components/Card";
import { useNavigate } from "react-router-dom";
import User from "../../../types/User";
import calculateNumberOfSequentialAbsences from "../../../utils/calculateNumberOfSequentialAbsences";
import formatBirthday from "../../../utils/formatBirthday";

const LeaderMembersCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface LeaderMembersCards {
  members: User[];
}

const generateMemberText = (member: User) => {
  const numberOfSequentialAbsences = calculateNumberOfSequentialAbsences(
    member.attendance!
  );
  const birthday = formatBirthday(member.birthday!);
  return `Faltou a ${numberOfSequentialAbsences} PG${
    numberOfSequentialAbsences !== 1 ? "s" : ""
  } Seguido${
    numberOfSequentialAbsences !== 1 ? "s" : ""
  } - Aniversário em ${birthday}`;
};

const LeaderMembersCards = ({ members }: LeaderMembersCards) => {
  const navigate = useNavigate();

  const goToMemberAttendance = (member: User) =>
    navigate("/leader/member/attendance", { state: { member } });
  const goToMemberInfo = (member: User) =>
    navigate("/leader/member/info", { state: { member } });

  return (
    <LeaderMembersCardsContainer>
      {members.map((member) => (
        <Card
          key={member.id}
          title={member.name}
          texts={[generateMemberText(member)]}
          buttons={[
            {
              text: "Presenças",
              onClick: () => goToMemberAttendance(member),
            },
            {
              text: "Perfil",
              onClick: () => goToMemberInfo(member),
            },
          ]}
        />
      ))}
    </LeaderMembersCardsContainer>
  );
};

export default LeaderMembersCards;
