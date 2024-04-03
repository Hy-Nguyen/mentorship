"use server";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import MentorTable from "./MentorTable";

export default async function MentorList() {
  const response = await fetch(
    "http://localhost:3000/api/mentors"
  );

  const mentors = await response.json();

  return (
    <>
      <div className="flex flex-col items-start justify-start w-2/3 px-4 pt-4">
        <h1 className="text-xl text-black font-bold">
          Mentors
        </h1>
        {/* SEARCH */}
        {/* FILTER TAGS */}
        <MentorTable mentors={mentors} />
      </div>
    </>
  );
}
