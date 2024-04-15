import {
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  Tooltip,
} from "@nextui-org/react";

export default async function Mentee(props: any) {
  const id = props.userID;
  const response = await fetch(
    `http://localhost:3000/api/mentorList/${id}`,
    { cache: "no-store" }
  );
  const mentor = await response.json();

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
          My Mentors
        </h1>
      </div>

      {(mentor.length != 0) ? (
        <Card
          className="  mt-4 w-full h-full "
          isBlurred
        >
          <CardBody className="">
            <AvatarGroup
              className=" dark text-start flex justify-start pl-4 "
              total={mentor.length}
            >
              {mentor.map(
                (
                  ment: { mentor_name: string },
                  i: number
                ) => (
                  <Tooltip
                    key={i}
                    content={ment.mentor_name}
                    className="dark w-full"
                    color="secondary"
                  >
                    <Avatar
                      name={ment.mentor_name}
                      color="secondary"
                      size="md"
                    />
                  </Tooltip>
                )
              )}
            </AvatarGroup>
          </CardBody>
        </Card>
      ) : <></>}
    </div>
  );
}
