import { useState } from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form";
import Modal from "../../../components/Modal";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import contentTypes from "../../../settings/contentTypes";
import Input from "../../Input";
import Select from "../../Select";
import MeetingContent from "../../../types/MeetingContent";

interface ContentAdditionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (content: MeetingContent) => void;
}

const ContentAdditionModal = ({
  isOpen,
  onClose,
  onSubmit,
}: ContentAdditionModalProps) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");

  const onSubmitForm = () => {
    if (onSubmit) onSubmit({ name, type, link });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title centered>Adicionar</Title>
      <Paragraph centered>Insira os dados do material</Paragraph>
      <Form onSubmit={onSubmitForm}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          placeholder="Tipo"
          options={contentTypes}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <Input
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Modal>
  );
};

export default ContentAdditionModal;
