import styled from "styled-components";
import theme from "../../settings/theme";

const Textarea = styled.textarea`
  background-color: ${theme.blue.medium};
  color: white;
  font-size: 16px;
  text-align: left;
  width: calc(95% - 24px);
  height: 112px;
  font-weight: 600;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin: 0;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  resize: none;
`;

export default Textarea;
