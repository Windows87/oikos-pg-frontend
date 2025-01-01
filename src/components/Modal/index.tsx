import ModalBackground from "./components/ModalBackground";
import ModalCloseButton from "./components/ModalCloseButton";
import ModalContainer from "./components/ModalContainer";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <ModalBackground>
      <ModalCloseButton onClick={onClose} />
      <ModalContainer>{children}</ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
