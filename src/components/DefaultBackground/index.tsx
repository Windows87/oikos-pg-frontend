import styled from "styled-components";
import theme from "../../settings/theme";

const DefaultBackground = styled.div<{ centered?: boolean }>`
  background-color: ${theme.blue.darker};
  height: calc(100% - 24px);
  width: calc(100% - 24px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.centered ? "justify-content: center; align-items: center;" : ""}
`;

export default DefaultBackground;
