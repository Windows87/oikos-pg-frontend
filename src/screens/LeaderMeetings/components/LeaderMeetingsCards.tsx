import styled from "styled-components";
import Card from "../../../components/Card";
import theme from "../../../settings/theme";

const LeaderMeetingsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LeaderMeetingsCards = () => {
  return (
    <LeaderMeetingsCardsContainer>
      <Card
        title="Casamento"
        texts={["12 de Janeiro - 10 Presentes (1 Visitante) - 1 Pendente"]}
        backgroundColor={theme.yellow.dark}
        buttons={[
          {
            text: "Editar",
            onClick: () => {},
            backgroundColor: theme.yellow.medium,
          },
          {
            text: "Finalizar",
            onClick: () => {},
            backgroundColor: theme.yellow.medium,
          },
          {
            text: "Presenças",
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
          {
            text: "Presenças",
            onClick: () => {},
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
          {
            text: "Presenças",
            onClick: () => {},
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
          {
            text: "Presenças",
            onClick: () => {},
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
          {
            text: "Presenças",
            onClick: () => {},
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
          {
            text: "Presenças",
            onClick: () => {},
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
          {
            text: "Presenças",
            onClick: () => {},
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
          {
            text: "Presenças",
            onClick: () => {},
          },
        ]}
      />
    </LeaderMeetingsCardsContainer>
  );
};

export default LeaderMeetingsCards;
