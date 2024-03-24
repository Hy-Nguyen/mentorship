import {
  Card,
  CardBody,
} from "@nextui-org/react";

export default function QuickAction() {
  const actionList = [
    {
      content: "Schedule a Mentorship Session",
      link: "/schedule",
    },
    {
      content: "Go To Profile",
      link: "/profile",
    },
    {
      content: "Logout",
      link: "/logout",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-11/12 ">
      <div className=" w-full">
        <h1 className="font-bold text-xl ">
          Quick Actions
        </h1>
      </div>

      <div className="flex flex-row w-full mt-4 ">
        {actionList.map((action, i) => (
          <Card
            className="mr-2 max-w-1/3"
            key={i}
            isBlurred
          >
            <CardBody>{action.content}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
