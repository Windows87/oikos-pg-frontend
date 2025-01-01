import styled from "styled-components";
import Content from "../../../types/Content";
import theme from "../../../settings/theme";
import contentTypeToIconMap from "../../../settings/contentTypeToIconMap";
import { MdDelete } from "react-icons/md";

interface ContentItemProps {
  content: Content;
  enableDeletion?: boolean;
}

const ContentItemContainer = styled.div`
  background-color: ${theme.blue.dark};
  color: white;
  font-size: 16px;
  width: calc(95% - 24px);
  height: 42px;
  min-height: 42px;
  font-weight: 600;
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  border-radius: 18px;
  margin: 0;
  gap: 8px;
`;

const ContentItemName = styled.span`
  flex: 1;
`;

const ContentItemDeleteContainer = styled.div`
  cursor: pointer;
`;

const ContentItem = ({ content, enableDeletion }: ContentItemProps) => {
  // @ts-ignore
  const ContentItemIcon = contentTypeToIconMap[content.type];
  return (
    <ContentItemContainer>
      <ContentItemIcon color="white" size={18} />
      <ContentItemName>{content.name}</ContentItemName>
      {enableDeletion && (
        <ContentItemDeleteContainer>
          <MdDelete color="#C1C1C1" size={14} />
        </ContentItemDeleteContainer>
      )}
    </ContentItemContainer>
  );
};

export default ContentItem;
