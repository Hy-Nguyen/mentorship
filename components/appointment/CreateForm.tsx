"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

export default function CreateAppointment(
  props: any
) {
  const [date, setDate] =
    useState<Dayjs | null>();

  const [time, setTime] =
    useState<Dayjs | null>();

  const [mentor, setMentor] =
    useState<string>("");

  const [mentee, setMentee] =
    useState<string>("");

  const [topic, setTopic] = useState<
    | string
    | (readonly string[] & string)
    | undefined
  >();

  const user = props.user;

  const type = props.type;
  const mentorList = props.mentorList;

  const menteeList = props.menteeList;

  function press() {
    alert(time);
  }

  function chooseMentee(e: any) {
    setMentee(e.target.value);
  }

  function chooseMentor(e: any) {
    setMentor(e.target.value);
  }

  let mentorID: any;
  let bodyMentees: any;
  let bodyMenteeID: any;

  if (type === "mentor") {
    mentorID = user.id;
    bodyMentees = menteeList[mentee]?.name;
    bodyMenteeID = menteeList[mentee]?.UserID;
  } else if (type === "mentee") {
    mentorID = mentor;
    bodyMentees = user.name;
    bodyMenteeID = user.id;
  }

  async function createAppointment(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://mentorship-chi.vercel.app/api/appointment/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mentorID: mentorID,
            date: dayjs(date).format(
              "YYYY-MM-DD"
            ),
            time: dayjs(time).format("hh:mm A"),
            meetingLink: "ZOOM",
            mentees: bodyMentees,
            meetingTitle: topic,
            menteesIDs: bodyMenteeID,
          }),
        }
      );

      if (response.ok) {
        alert("Booked!");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Card
        className="flex flex-col w-1/2 bg-background/40"
        isBlurred
      >
        <CardHeader>
          <h1 className="w-full text-[24px] text-black text-center">
            Create an Appointment
          </h1>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={createAppointment}
            className="flex flex-col items-center w-full gap-y-4 text-black"
          >
            <Input
              label="Your Name"
              value={user.name}
              isReadOnly
            />
            <Input
              label="Appointment Topic"
              value={topic}
              onValueChange={setTopic}
              isRequired
            />
            {type === "mentor" ? (
              <>
                <Select
                  label="Choose Your Mentee"
                  variant="bordered"
                  placeholder=""
                  selectedKeys={[mentee]}
                  className=""
                  onChange={chooseMentee}
                  isRequired
                >
                  {menteeList.map(
                    (
                      mentee: {
                        name: string;
                        UserID: number;
                      },
                      i: number
                    ) => (
                      <SelectItem
                        key={i}
                        className="text-black"
                      >
                        {mentee.name}
                      </SelectItem>
                    )
                  )}
                </Select>
              </>
            ) : (
              <>
                <Select
                  label="Choose Your Mentor"
                  variant="bordered"
                  placeholder=""
                  selectedKeys={[mentor]}
                  className=""
                  onChange={chooseMentor}
                  isRequired
                >
                  {mentorList.map(
                    (
                      mentor: {
                        name: string;
                        UserID: number;
                      },
                      i: number
                    ) => (
                      <SelectItem
                        key={mentor.UserID}
                        className="text-black"
                      >
                        {mentor.name}
                      </SelectItem>
                    )
                  )}
                </Select>
              </>
            )}
            <DatePicker
              label="Appointment Date"
              value={date}
              onChange={(newDate) =>
                setDate(newDate)
              }
              disablePast
              className="w-full"
            />
            <TimePicker
              label="Appointment Time"
              value={time}
              onChange={(newTime) =>
                setTime(newTime)
              }
              className=" w-full"
              minutesStep={15}
            />
            <Button
              type="submit"
              className="w-1/2"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
