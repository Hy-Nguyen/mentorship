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
} from "@nextui-org/react";
import Link from "next/link";
export default function Appointments() {
  const userAppoint = [
    {
      key: "1",
      date: "Mar 23, 8:15PM",
      desc: "Mentorship: Course Layout",
      mentee: "Hy N.",
      meetingID: <Link href="/">Zoom</Link>,
    },
    {
      key: "2",
      date: "Mar 23, 8:15PM",

      desc: "Mentorship: Course Layout",
      mentee: "Cris P.",
      meetingID: <Link href="/">Zoom</Link>,
    },
    {
      key: "3",
      date: "Mar 23, 8:15PM",

      desc: "Mentorship: Course Layout",
      mentee: "Luke F.",
      meetingID: <Link href="/">Zoom</Link>,
    },
    {
      key: "4",
      date: "Mar 23, 8:15PM",

      desc: "Mentorship: Course Layout",
      mentee: "Miguel U.",
      meetingID: <Link href="/">Zoom</Link>,
    },
    {
      key: "5",
      date: "Mar 23, 8:15PM",

      desc: "Mentorship: Course Layout",
      mentee: "Yousef A.",
      meetingID: <Link href="/">Zoom</Link>,
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
    <div className="flex items-center justify-center  w-2/3">
      <Card className=" m-4">
        <CardBody>
          <Table>
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
                    <TableCell>
                      {getKeyValue(
                        item,
                        columnKey
                      )}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
