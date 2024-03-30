import { Button } from "@nextui-org/react";

import {
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";

import {
  HomeIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
export default function SideNavItem(props: {
  name: string;
  icon: any;
  link: string;
}) {
  return (
    <>
      <Link
        isBlock
        href={props.link}
        color="foreground"
        className="w-11/12"
      >
        <p className="mr-4">{props.icon}</p>
        {props.name}
      </Link>

      {/* <div className="py-1">
        <Card
          className="w-full"
          isBlurred
          isPressable
        >
          <div className="flex flex-row">
            <CardBody>
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center">
                  <div className="text-sm">
                    {props.icon}
                  </div>
                  <div className="pl-4">
                    <div className="text-lg text-gray-900">
                      {props.name}
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </div>
        </Card>
      </div> */}
    </>
  );
}
