import { useState } from "react";
import Button from "../../../components/Button";
import ContentsList from "../../../components/ContentsList";
import Content from "../../../types/Content";

const SecondLeaderNewMeetingForm = () => {
  const [contents, setContents] = useState<Content[]>([]);

  const handleNewContent = (content: Content) => {
    setContents([...contents, content]);
  };

  return (
    <>
      <ContentsList
        contents={contents}
        enableAddition
        enableDeletion
        onNewContent={handleNewContent}
      />
      <Button>Finalizar</Button>
    </>
  );
};

export default SecondLeaderNewMeetingForm;
