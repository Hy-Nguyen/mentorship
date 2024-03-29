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

export default function Appointments() {
  const supabase = createClient();
  const [appointments, setAppointments] =
    useState([]);

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

  console.log(appointments);

  const userAppoint = [
    {
      key: "1",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Hy N.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
    {
      key: "2",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Cris P.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
    {
      key: "3",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Luke F.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
    {
      key: "4",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Miguel U.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
    {
      key: "5",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Yousef A.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
    {
      key: "6",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Hy N.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
    {
      key: "7",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Cris P.",
      meetingID: (
        <Link isBlock href="/" color="foreground">
          Zoom
        </Link>
      ),
    },
  ];
  const columns = [
    {
      key: "date",
      label: "Date / Time",
    },
    {
      key: "desc",
      label: "Description",
    },
    {
      key: "mentee",
      label: "Mentee",
    },
    {
      key: "meetingID",
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
        <TableBody items={userAppoint}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell className="text-black">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
