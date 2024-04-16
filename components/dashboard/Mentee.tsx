import {
  Card,
  CardBody,
  Avatar,
  AvatarGroup,
  Tooltip,
  CardFooter,
  Link,
  Button,
} from "@nextui-org/react";

export default async function Mentee(props: any) {
  const id = props.userID;
  const response = await fetch(
    `https://mentorship-chi.vercel.app/api/mentorList/${id}`,
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

      {mentor.length != 0 ? (
        <Card
          className=" bg-background/40  mt-4 w-3/5 h-full "
          isBlurred
        >
          <CardBody className="">
            <AvatarGroup
              className=" dark text-start flex justify-center py-4 "
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
          {/* <CardFooter>
            <div className="flex justify-center">
              {mentor.map(
                (
                  ment: { mentor_name: string },
                  i: number
                ) => (
                  <p key={i}>
                    {ment.mentor_name}
                  </p>
                )
              )}
            </div>
          </CardFooter> */}
        </Card>
      ) : (
        <>
          <Card
            className=" bg-background/40  mt-4 w-3/5 h-full p-2 "
            isBlurred
          >
            <CardBody className="flex justify-center items-center space-y-3">
              <h1 className="font-bold">
                No Mentors Associated
              </h1>
              <Link href={`/mentors/${id}`}>
                <Button color="warning">
                  Add Mentors Here
                </Button>
              </Link>
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
}
