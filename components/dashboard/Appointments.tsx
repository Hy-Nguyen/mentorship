"use client";
import {
  Card,
  CardBody,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableColumn,
  getKeyValue,
  Link,
  Divider,
} from "@nextui-org/react";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface AppointType {
  meetingID: number;
  mentorID: number;
  data: Date;
  time: string;
  meetingTitle: string;
  meetingLink: string;
  mentees: string[];
}

export default function Appointments() {
  const supabase = createClient();
  const [appointments, setAppointments] =
    useState<AppointType>([]);

  const [menteeList, setMenteeList] = useState<
    string[]
  >([]);

  // getMenteeNames(
  //   appointment.mentees
  // )

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data: appointmentList, error } =
        await supabase
          .from("Appointments")
          .select();

      if (error) console.log("Error: ", error);
      else
        setAppointments(
          Array.from(appointmentList)
        );
    };

    fetchAppointments();
  }, []);

  // useEffect(() => {
  //   async function getMenteeNames(
  //     mentees: number[]
  //   ) {
  //     const names = [];
  //     for (let i = 0; i < mentees.length; i++) {
  //       let { data, error } = await supabase
  //         .from("Users")
  //         .select("username")
  //         .eq("UserID", mentees[i]);
  //       console.log(data);
  //     }
  //   }

  // }, [appointments]);

  const userAppoint = appointments;
  // const userAppoint = [
  //   {
  //     key: "1",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Hy N.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Cris P.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Luke F.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "4",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Miguel U.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "5",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Yousef A.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "6",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Hy N.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  //   {
  //     key: "7",
  //     date: "Mar 23, 8:15PM",
  //     desc: "Mentorship: Course Layout",
  //     mentee: "Cris P.",
  //     meetingID: (
  //       <Link isBlock href="/" color="foreground">
  //         Zoom
  //       </Link>
  //     ),
  //   },
  // ];
  const columns = [
    {
      key: "date",
      label: "Date",
    },
    {
      key: "time",
      label: "Time",
    },
    {
      key: "meetingTitle",
      label: "Description",
    },
    {
      key: "mentees",
      label: "Mentee",
    },
    {
      key: "meetingLink",
      label: "Meeting ID",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-start w-2/3 px-4 pt-4">
      <div>
        <h1 className="text-xl text-black font-bold">
          Appointments
        </h1>
      </div>

      <Table
        className="text-black mt-4"
        selectionMode="single"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {userAppoint.map((appointment) => (
            <TableRow key={appointment.meetingID}>
              <TableCell>
                {appointment.date}
              </TableCell>
              <TableCell>
                {appointment.time}
              </TableCell>
              <TableCell>
                {appointment.meetingTitle}
              </TableCell>
              <TableCell>
                {appointment.mentees.join(", ")}
              </TableCell>
              <TableCell>
                {appointment.meetingLink}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
