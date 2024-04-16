"use client";

import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@nextui-org/react";

import { useEffect, useState } from "react";

export default function AddMentor(props: {
  studentID: string;
}) {
  const [mentorName, setMentorName] =
    useState("");
  const [mentorList, setMentorList] = useState(
    []
  );
  let studentID = props.studentID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/mentors/`,
          {
            cache: "no-store",
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok"
          );
        }
        const data = await response.json();
        setMentorList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    let response = await fetch(
      `http://localhost:3000/api/addmentor/`,
      {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify({
          mentee: studentID,
          mentorName: mentorName,
        }),
      }
    );
    e.target.reset();
  }

  return (
    <div className="w-full flex flex-col  ">
      <Card
        isBlurred
        shadow="sm"
        className="w-full bg-background/40"
      >
        <CardHeader className="flex justify-center items-center text-xl font-bold">
          Enroll under a Mentor!
        </CardHeader>
        <CardBody className="w-full ">
          <form
            className="flex flex-col justify-center items-center space-y-4"
            onSubmit={handleSubmit}
          >
            <Autocomplete
              label="Select Your Mentor"
              placeholder="Dr. Doofenshmirtz"
              className="w-full"
              defaultItems={mentorList}
              selectedKey={mentorName}
              onSelectionChange={setMentorName}
              isRequired
            >
              {(item: { name: string }) => (
                <AutocompleteItem
                  key={item.name}
                  className="text-black"
                >
                  {item.name}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <Textarea
              label={"Message (optional)"}
              labelPlacement="outside"
              placeholder="Send a message to your future mentor!"
            />
            <Button
              type="submit"
              color="success"
              variant="ghost"
            >
              Enroll!
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
