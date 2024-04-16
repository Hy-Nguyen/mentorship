import {
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";

export default function QuickAction(props: {
  userID: any;
}) {
  const actionList = [
    {
      content: "Schedule a Mentorship Session",
      link: `/appointment/${props.userID}`,
    },
    {
      content: "Go To Profile",
      link: `/profile/${props.userID}`,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-11/12 ">
      <div className=" w-full">
        <h1 className="font-bold text-xl text-black">
          Quick Actions
        </h1>
      </div>

      <div className="flex flex-row w-full mt-4 space-x-2">
        {actionList.map((action, i) => (
          <Card className=" " key={i} isBlurred>
            <Link
              href={action.link}
              color="foreground"
            >
              <CardBody>
                {action.content}
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
