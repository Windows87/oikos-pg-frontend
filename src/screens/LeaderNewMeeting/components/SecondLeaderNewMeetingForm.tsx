import { useState } from "react";
import Button from "../../../components/Button";
import ContentsList from "../../../components/ContentsList";
import MeetingContent from "../../../types/MeetingContent";
import Meeting from "../../../types/Meeting";

interface SecondLeaderNewMeetingFormProps {
  meeting?: Meeting;
  isLoading: boolean;
  onSubmit: (contents: MeetingContent[]) => void;
}

const SecondLeaderNewMeetingForm = ({
  meeting,
  isLoading,
  onSubmit,
}: SecondLeaderNewMeetingFormProps) => {
  const [contents, setContents] = useState<MeetingContent[]>(
    meeting ? meeting.content : []
  );

  const handleSubmit = () => {
    onSubmit(contents);
  };

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
      <Button onClick={handleSubmit}>
        {isLoading ? "Adicionando.." : "Finalizar"}
      </Button>
    </>
  );
};

export default SecondLeaderNewMeetingForm;
