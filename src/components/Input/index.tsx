import styled from "styled-components";
import theme from "../../settings/theme";

const Input = styled.input<{ codeStyle?: boolean }>`
  background-color: ${theme.blue.medium};
  color: white;
  font-size: ${(props) => (props.codeStyle ? "24px" : "16px")};
  text-align: ${(props) => (props.codeStyle ? "center" : "left")};
  width: calc(95% - 24px);
  height: 42px;
  font-weight: 600;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 0;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
`;

export default Input;
