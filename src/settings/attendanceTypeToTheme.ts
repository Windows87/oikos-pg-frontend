import theme from "./theme";

const attendanceTypeToTheme = {
  Presente: theme.green,
  Visitante: theme.green,
  Ausente: theme.red,
  "Não Preenchido": theme.blue,
};

export default attendanceTypeToTheme;
