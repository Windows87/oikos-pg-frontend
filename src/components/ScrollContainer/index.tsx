import styled from "styled-components";

const ScrollContainer = styled.div<{ gap?: number }>`
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${(props) => props.gap || 0}px;
`;

export default ScrollContainer;
