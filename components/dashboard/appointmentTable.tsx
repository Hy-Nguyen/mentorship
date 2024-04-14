"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function AppointmentTable(
  props: any
) {
  const col = [
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
  const row = props.rows;

  return (
    <>
      <Table className="text-black mt-4 w-full">
        <TableHeader columns={col}>
          {(column: any) => (
            <TableColumn key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {row.map((appointment: any) => (
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
                {appointment.mentees}
              </TableCell>
              <TableCell>
                {appointment.meetingLink}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
