import styled from "styled-components";
import theme from "../../../settings/theme";

const NavigationButtonsContainer = styled.div`
  background-color: ${theme.blue.mediumlight};
  display: flex;
  gap: 12px;
  padding: 7px 26px;
  border-radius: 36px;
  width: fit-content;
  align-self: center;
`;

export default NavigationButtonsContainer;
