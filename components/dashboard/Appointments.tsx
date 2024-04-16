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

export default async function Appointments(props: {
  userID: number;
  role: string;
}) {
  const id = props.userID;
  const role = props.role;
  let response;
  if (role === "mentor") {
    response = await fetch(
      `http://localhost:3000/api/appointment/mentor/${id}`,
      { cache: "no-store" }
    );
  } else if (role === "mentee") {
    response = await fetch(
      `http://localhost:3000/api/appointment/mentee/${id}`,
      { cache: "no-store" }
    );
  }

  const userAppoint = await response?.json();

  return (
    <div className="flex flex-col items-start justify-start w-[40%] ml-4 pt-4 ">
      <h1 className="text-xl text-black font-bold">
        Appointments
      </h1>
      <div className="w-full">
        <AppointmentTable
          role={role}
          rows={userAppoint}
        />
      </div>
    </div>
  );
}
