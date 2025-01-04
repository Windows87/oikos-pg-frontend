import styled from "styled-components";

const GapContainer = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

export default GapContainer;
