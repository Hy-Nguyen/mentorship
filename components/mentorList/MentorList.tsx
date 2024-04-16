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
  Checkbox,
  CheckboxGroup,
  Input,
  Skeleton,
} from "@nextui-org/react";

export default function MentorList() {
  const [query, setQuery] = useState("");
  const [mentors, setMentors] = useState();
  const [selected, setSelected] = useState([]);
  const [interestList, setInteresList] = useState(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/interests`,
          { cache: "no-store", method: "GET" }
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok"
          );
        }
        const data = await response.json();
        setInteresList(data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/mentors/${query}`,
          {
            cache: "no-store",
            method: "POST",
            body: JSON.stringify(selected),
          }
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
  }, [query, selected]);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-1/2 px-4 pt-4 space-y-8">
        {/* SEARCH */}
        {/* FILTER TAGS */}

        <h1 className=" text-xl text-black font-bold text-center">
          Find Your Mentor!
        </h1>
        <Input
          placeholder="Search"
          onChange={(e) =>
            setQuery(e.target.value)
          }
        />
        <CheckboxGroup
          label="Filter Interests"
          color="success"
          value={selected}
          onValueChange={setSelected}
          orientation="horizontal"
        >
          {interestList.map((interest: any) => (
            <>
              <Checkbox
                key={interest.name}
                value={interest.interest}
              >
                {interest.interest}
              </Checkbox>
            </>
          ))}
        </CheckboxGroup>

        {mentors ? (
          <MentorTable mentors={mentors} />
        ) : (
          <Skeleton></Skeleton>
        )}
      </div>
    </>
  );
}
