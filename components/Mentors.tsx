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
    <div className="flex flex-row items-center justify-center w-11/12 ">
      <Card
        className=" bg-gray-300 = w-full h-full "
        isBlurred
      >
        <CardBody>
          <h1>My Mentees</h1>
          <AvatarGroup
            className=" dark text-start flex justify-start"
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
