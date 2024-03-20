import { Button } from "@nextui-org/react";

import {
  Card,
  CardBody,
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
}) {
  return (
    <>
      {/* <div className="py-1 ">
        <Button
          variant="bordered"
          startContent={props.icon}
          fullWidth
        >
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-start">
              <div className="pl-4">
                <h1 className="text-xl font-bold text-gray-900">
                  {props.name}
                </h1>
              </div>
            </div>
          </div>
        </Button>
      </div> */}

      <div className="py-1">
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
      </div>
    </>
  );
}
