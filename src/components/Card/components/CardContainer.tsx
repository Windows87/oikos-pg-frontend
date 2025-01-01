import styled from "styled-components";
import theme from "../../../settings/theme";

const CardContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: ${(props) =>
    props.backgroundColor || theme.blue.mediumlight};
  border-radius: 10px;
`;

export default CardContainer;
