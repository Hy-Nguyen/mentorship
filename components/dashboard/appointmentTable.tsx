"use client";

import { Card } from "@nextui-org/react";
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

  const col2 = [
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
      label: "Mentor",
    },
    {
      key: "meetingLink",
      label: "Meeting ID",
    },
  ];
  const row = props.rows;
  console.log(row);

  return (
    <>
      <Card
        isBlurred
        shadow="sm"
        className="w-full bg-background/40 p-2 mt-4"
      >
        <Table
          className="text-black  w-full"
          aria-label=""
          removeWrapper={true}
        >
          {props.role == "mentor" ? (
            <TableHeader columns={col}>
              {(column: any) => (
                <TableColumn
                  key={column.key}
                  className=""
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
          ) : (
            <TableHeader columns={col2}>
              {(column: any) => (
                <TableColumn
                  key={column.key}
                  className=""
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
          )}
          {row.length != 0 ? (
            <TableBody>
              {row.map((appointment: any) => (
                <TableRow
                  key={appointment.meetingID}
                >
                  <TableCell>
                    {appointment.date}
                  </TableCell>
                  <TableCell>
                    {appointment.time}
                  </TableCell>
                  <TableCell>
                    {appointment.meetingTitle}
                  </TableCell>
                  {props.role == "mentor" ? (
                    <TableCell>
                      {appointment.mentees}
                    </TableCell>
                  ) : (
                    <TableCell>
                      {appointment.Users.name}
                    </TableCell>
                  )}
                  <TableCell>
                    {appointment.meetingLink}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody
              emptyContent={
                "No appointments made."
              }
            >
              {[]}
            </TableBody>
          )}
        </Table>
      </Card>
    </>
  );
}
