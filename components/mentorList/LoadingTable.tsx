"use client";

import { Checkbox } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useState } from "react";

export default function LoadingTable(props: any) {
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
      <Table
        className="text-black mt-4 w-full"
        aria-label=""
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"Loading..."}>
          {[]}
        </TableBody>
      </Table>
    </>
  );
}
