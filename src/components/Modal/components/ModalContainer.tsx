import styled from "styled-components";
import theme from "../../../settings/theme";

const ModalContainer = styled.div`
  background-color: ${theme.blue.darker};
  border-radius: 18px;
  padding: 16px;
  width: calc(95% - 32px);
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default ModalContainer;
