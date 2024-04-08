"use client";
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
import {
  Suspense,
  useEffect,
  useState,
} from "react";
import {
  Input,
  Skeleton,
} from "@nextui-org/react";

export default function MentorList() {
  const [query, setQuery] = useState("");
  const [mentors, setMentors] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/mentors/${query}`,
          { cache: "no-store" }
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok"
          );
        }
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  console.table(mentors);

  return (
    <>
      <div className="flex flex-col items-start justify-start w-2/3 px-4 pt-4">
        {/* SEARCH */}
        {/* FILTER TAGS */}
        <Input
          placeholder="Search"
          onChange={(e) =>
            setQuery(e.target.value)
          }
        />

        {mentors ? (
          <MentorTable mentors={mentors} />
        ) : (
          <Skeleton></Skeleton>
        )}
      </div>
    </>
  );
}
