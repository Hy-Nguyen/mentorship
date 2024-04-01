import { createClient } from "@/utils/supabase/client";
import AppointmentTable from "@/components/dashboard/appointmentTable";

interface AppointType {
  meetingID: number;
  mentorID: number;
  data: Date;
  time: string;
  meetingTitle: string;
  meetingLink: string;
  mentees: string[];
}

export default async function Appointments() {
  const id = 49;
  const response = await fetch(
    `http://localhost:3000/api/appointment/mentor/${id}`
  );
  const userAppoint = await response.json();

  return (
    <div className="flex flex-col items-start justify-start w-2/3 px-4 pt-4">
      <h1 className="text-xl text-black font-bold">
        Appointments
      </h1>
      <AppointmentTable rows={userAppoint} />
    </div>
  );
}
