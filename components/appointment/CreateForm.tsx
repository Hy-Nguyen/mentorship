"use client";

import {
  Button,
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

function createAppointment(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();
}

export default function CreateAppointment(
  props: any
) {
  const [date, setDate] =
    useState<Dayjs | null>();

  const [time, setTime] =
    useState<Dayjs | null>();

  const [mentor, setMentor] =
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

  function chooseMentor(e) {
    setMentor(e.target.value);
  }

  return (
    <>
      <form
        onSubmit={createAppointment}
        className="flex flex-col w-1/3 gap-y-4 text-black"
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
        />
        {type === "mentor" ? (
          <>
            <div>{type}</div>
            <Select
              label="Choose Your Mentee"
              variant="bordered"
              placeholder=""
              selectedKeys={[mentor]}
              className="max-w-xs"
              onChange={chooseMentor}
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
                    value={mentee.UserID}
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
            <div>{type}</div>
          </>
        )}
        <DatePicker
          label="Appointment Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          disablePast
        />
        <TimePicker
          label="Appointment Time"
          value={time}
          onChange={(newTime) => setTime(newTime)}
          className="rounded-xl"
          minutesStep={15}
        />
        <Button type="button" onPress={press}>
          See Time
        </Button>
      </form>
    </>
  );
}
