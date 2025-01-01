import styled from "styled-components";
import theme from "../../settings/theme";

const Button = styled.button<{
  lighter?: boolean;
  small?: boolean;
  width?: string;
  height?: number;
  fontSize?: number;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.lighter
      ? theme.blue.lighter
      : theme.blue.dark};
  color: white;
  font-size: ${(props) => props.fontSize || (props.small ? 9 : 16)}px;
  width: ${(props) => props.width || "95%"};
  height: ${(props) => props.height || (props.small ? 24 : 42)}px;
  min-height: ${(props) => props.height || (props.small ? 24 : 42)}px;
  font-weight: 600;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 0;
`;

export default Button;
