import styled from "styled-components";
import theme from "../../settings/theme";

const DefaultBackground = styled.div<{ centered?: boolean; gap?: number }>`
  background-color: ${theme.blue.darker};
  height: calc(100% - 24px);
  width: calc(100% - 24px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0")};
  ${(props) =>
    props.centered ? "justify-content: center; align-items: center;" : ""}
`;

export default DefaultBackground;
