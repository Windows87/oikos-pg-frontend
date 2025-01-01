import { useState } from "react";
import Content from "../../types/Content";
import ContentAdditionModal from "./components/ContentAdditionModal";
import ContentItem from "./components/ContentItem";
import ContentListAddItemText from "./components/ContentListAddItemText";
import ContentsListContainer from "./components/ContentsListContainer";

interface ContentsListProps {
  contents: Content[];
  enableDeletion?: boolean;
  enableAddition?: boolean;
  widthContent?: string;
  onNewContent?: (content: Content) => void;
}

const ContentsList = ({
  contents,
  enableDeletion,
  enableAddition,
  widthContent,
  onNewContent,
}: ContentsListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ContentsListContainer>
      {contents.map((content) => (
        <ContentItem
          enableDeletion={enableDeletion}
          key={content.id}
          content={content}
          widthContent={widthContent}
        />
      ))}
      {enableAddition && (
        <ContentListAddItemText onClick={openModal}>
          Adicionar Material
        </ContentListAddItemText>
      )}
      <ContentAdditionModal
        isOpen={isModalOpen}
        onSubmit={onNewContent}
        onClose={closeModal}
      />
    </ContentsListContainer>
  );
};

export default ContentsList;
