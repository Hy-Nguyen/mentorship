import {
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  Tooltip,
} from "@nextui-org/react";

export default function Mentors() {
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
            className=" dark text-start flex justify-start "
            total={students.length}
          >
            {students.map((student, i) => (
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
