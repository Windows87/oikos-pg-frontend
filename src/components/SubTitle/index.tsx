import styled from "styled-components";

const SubTitle = styled.h2<{ centered?: boolean }>`
  font-size: 16px;
  color: #c1c1c1;
  text-align: center;
  margin: 0;
  font-weight: 500;
  text-align: ${(props) => (props.centered ? "center" : "justify")};
`;

export default SubTitle;
