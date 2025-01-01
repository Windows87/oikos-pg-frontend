import { MdClose } from "react-icons/md";
import styled from "styled-components";

const ModalCloseButtonContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

interface ModalCloseButtonProps {
  onClick: () => void;
}

const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return (
    <ModalCloseButtonContainer onClick={onClick}>
      <MdClose color="white" fontSize="18" />
    </ModalCloseButtonContainer>
  );
};

export default ModalCloseButton;
