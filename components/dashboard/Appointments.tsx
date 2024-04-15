import { createClient } from "@/utils/supabase/client";
import AppointmentTable from "@/components/dashboard/appointmentTable";
import { cache } from "react";

interface AppointType {
  meetingID: number;
  mentorID: number;
  data: Date;
  time: string;
  meetingTitle: string;
  meetingLink: string;
  mentees: string[];
}

export default async function Appointments(props: {
  userID: number;
}) {
  const id = props.userID;
  const response = await fetch(
    `http://localhost:3000/api/appointment/mentor/${id}`,
    { cache: "no-store" }
  );
  const userAppoint = await response.json();

  return (
    <div className="flex flex-col items-start justify-start w-[40%] ml-4 pt-4 ">
      <h1 className="text-xl text-black font-bold">
        Appointments
      </h1>
      <div>
        <AppointmentTable rows={userAppoint} />
      </div>
    </div>
  );
}
