import MeetingAttendance from "./MeetingAttendance";

export default interface User {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  birthday?: string;
  group_id?: number;
  is_admin?: boolean;
  is_leader?: boolean;
  attendance?: MeetingAttendance[];
}
