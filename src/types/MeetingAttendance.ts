import User from "./User";

export default interface MeetingAttendance {
  id: number;
  user?: User;
  attendance_type: string;
  absence_reason?: string;
  visitor_name?: string;
  visitor_whatsapp?: string;
}
