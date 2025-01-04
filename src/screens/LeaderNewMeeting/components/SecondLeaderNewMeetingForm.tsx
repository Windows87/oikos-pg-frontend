import { useState } from "react";
import Button from "../../../components/Button";
import ContentsList from "../../../components/ContentsList";
import MeetingContent from "../../../types/MeetingContent";

const SecondLeaderNewMeetingForm = () => {
  const [contents, setContents] = useState<MeetingContent[]>([]);

  const handleNewContent = (content: MeetingContent) => {
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
