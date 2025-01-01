import styled from "styled-components";

const Paragraph = styled.p<{ centered?: boolean; width?: string }>`
  font-size: 16px;
  color: #dddddd;
  text-align: justify;
  margin: 0;
  width: ${(props) => props.width || "100%"};
  text-align: ${(props) => (props.centered ? "center" : "justify")};
`;

export default Paragraph;
