"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function MentorTable(props: any) {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "E-Mail",
    },
    {
      key: "UserID",
      label: "Profile",
    },
  ];

  const mentors = props.mentors;

  return (
    <>
      <Table className="text-black mt-4 w-full">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {mentors.map((mentor: any) => (
            <TableRow key={mentor.UserID}>
              <TableCell>{mentor.name}</TableCell>
              <TableCell>{mentor.name}</TableCell>
              <TableCell>{mentor.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
