import MeetingAttendance from "./MeetingAttendance";
import MeetingContent from "./MeetingContent";

export default interface Meeting {
  id: number;
  name: string;
  date: string;
  theme: string;
  analysis?: string;
  canceled_at?: string;
  content: MeetingContent[];
  attendance?: MeetingAttendance[];
}
