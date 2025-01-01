import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import contentTypes from "../../../settings/contentTypes";
import Input from "../../Input";
import Select from "../../Select";

interface ContentAdditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContentAdditionModal = ({
  isOpen,
  onClose,
}: ContentAdditionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title centered>Adicionar</Title>
      <Paragraph centered>Insira os dados do material</Paragraph>
      <Form>
        <Input placeholder="Nome" />
        <Select placeholder="Tipo" options={contentTypes} />
        <Input placeholder="Link" />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Modal>
  );
};

export default ContentAdditionModal;
