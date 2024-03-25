import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";

import React from "react";

import { UserIcon } from "@heroicons/react/24/outline";

// User Profile fetch. Show user PFP, and bio below. Also show age, as well as account tags
export default function UserProfile() {
  var userName = "User";
  let profileInfo: string =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium quaerat vero beatae velit necessitatibus harum voluptatem quas culpa! Eveniet deleniti illo natus, commodi perferendis eum omnis ex adipisci saepe.";
  return (
    <div className="flex flex-col items-start justify-center h-full">
      <div>
        <h1 className="text-black font-bold text-xl">
          Profile
        </h1>
      </div>
      <Card className="w-11/12 mt-4">
        <CardHeader className=" justify-between">
          <Avatar name="User" size="lg" />
          Welcome {userName}
          <p></p>
        </CardHeader>
        <Divider className="mx-4" />
        <CardBody>
          <h1 className=" font-bold">Profile</h1>
          <p className="text-small px-2">
            {profileInfo}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
