"use client";

import {
  Card,
  Checkbox,
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useState } from "react";

export default function MentorTable(props: any) {
  const [selected, setSelected] = useState();

  function handleChange(e: any) {
    setSelected(e);
  }

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
      key: "UserInterests",
      label: "Interest / Specialization",
    },
  ];

  const mentors = props.mentors;

  return (
    <>
      <Card
        isBlurred
        className="bg-background/10 flex flex-row w-full p-4"
        shadow="sm"
      >
        <Table
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={handleChange}
          className="text-black mt-4 w-full"
          aria-label=""
          removeWrapper={true}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody>
            {mentors.map((mentor: any) =>
              mentor.UserInterests &&
              mentor.UserInterests
                .interest_name ? (
                <TableRow key={mentor.UserID}>
                  <TableCell>
                    {mentor.name}
                  </TableCell>
                  <TableCell>
                    {mentor.email}
                  </TableCell>
                  <TableCell>
                    <h1>
                      {mentor.UserInterests.interest_name.map(
                        (interest: any) => (
                          <div key={interest}>
                            {interest}
                          </div>
                        )
                      )}
                    </h1>
                  </TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
