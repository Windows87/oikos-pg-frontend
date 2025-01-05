import MeetingAttendance from "../types/MeetingAttendance";

const calculateNumberOfSequentialAbsences = (
  attendances: MeetingAttendance[]
): number => {
  let numberOfSequentialAbsences = 0;

  for (let i = 0; i < attendances.length; i++) {
    if (attendances[i].attendance_type === "Não Preenchido") continue;
    if (attendances[i].attendance_type !== "Ausente") break;

    numberOfSequentialAbsences++;
  }

  return numberOfSequentialAbsences;
};

export default calculateNumberOfSequentialAbsences;
