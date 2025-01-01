import styled from "styled-components";
import theme from "../../settings/theme";

const Button = styled.button`
  background-color: ${theme.blue.dark};
  color: white;
  font-size: 16px;
  width: 95%;
  height: 42px;
  font-weight: 600;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 0;
`;

export default Button;
