import styled from "styled-components";

const Title = styled.h1<{ centered?: boolean }>`
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0;
  text-align: ${(props) => (props.centered ? "center" : "justify")};
`;

export default Title;
