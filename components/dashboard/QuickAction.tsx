import Link from "next/link";
import {
  Card,
  CardBody,
} from "@nextui-org/react";

export default function QuickAction({ userID }: { userID: string }) {
  const actionList = [
    {
      content: "Schedule a Mentorship Session",
      link: `/appointments/${userID}`, //Needs work,
    },
    {
      content: "Go To Profile",
      link: `/profile/${userID}`,
    },
    {
      content: "Logout",
      link: `/`,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-11/12 ">
      <div className="w-full">
        <h1 className="font-bold text-xl text-black">Quick Actions</h1>
      </div>

      <div className="flex flex-row w-full mt-4 space-x-2">
        {actionList.map((action, i) => (
          <Link href={action.link} key={i}>
            <Card className="" isBlurred>
              <CardBody>{action.content}</CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
