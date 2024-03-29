"use client";
import {
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  Tooltip,
} from "@nextui-org/react";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Mentors() {
  const supabase = createClient();

  const [mentees, setMentees] = useState<
    string[]
  >([]);

  useEffect(() => {
    const fetchMentees = async () => {
      const { data: menteeList, error } =
        await supabase
          .from("mentorship")
          .select("mentee")
          .eq("mentorid", 49);

      if (error) console.log("Error: ", error);
      else setMentees(Array.from(menteeList[0].mentee));

      console.log(menteeList[0].mentee);
    };

    fetchMentees();
  }, []);
  const students = [
    "Hy N.",
    "Cris P.",
    "Luke F.",
    "Miguel U.",
    "Yousef A.",
  ];
  return (
    <div className="flex flex-col items-start justify-center w-11/12 ">
      <div>
        <h1 className="text-xl font-bold text-black">
          My Mentees
        </h1>
      </div>

      <Card
        className="  mt-4 w-full h-full "
        isBlurred
      >
        <CardBody className="">
          <AvatarGroup
            className=" dark text-start flex justify-start pl-4 "
            total={mentees.length}
          >
            {mentees.map((student, i) => (
              <Tooltip
                key={i}
                content={student}
                className="dark w-full"
                color="secondary"
              >
                <Avatar
                  name={student}
                  color="secondary"
                  size="md"
                />
              </Tooltip>
            ))}
          </AvatarGroup>
        </CardBody>
      </Card>
    </div>
  );
}
