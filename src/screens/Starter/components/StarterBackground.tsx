import styled from "styled-components";
import starterBackground from "../../../assets/starter-background.png";

const StarterBackground = styled.div`
  background-image: url(${starterBackground});
  background-position: center;
  background-size: cover;
  height: calc(100% - 48px);
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export default StarterBackground;
