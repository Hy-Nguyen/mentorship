import {
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  Tooltip,
} from "@nextui-org/react";

export default async function Mentors(
  props: any
) {
  const id = props.userID;
  const response = await fetch(
    `http://localhost:3000/api/menteeList/${id}`,
    { cache: "no-store" }
  );
  const mentees = await response.json();

  // const mentees = [
  //   "Hy N.",
  //   "Cris P.",
  //   "Luke F.",
  //   "Miguel U.",
  //   "Yousef A.",
  // ];
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
