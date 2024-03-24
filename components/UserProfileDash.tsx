import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

import React from "react";

import { UserIcon } from "@heroicons/react/24/outline";

// User Profile fetch. Show user PFP, and bio below. Also show age, as well as account tags
export default function UserProfile() {
  return (
    <div className="flex items-center justify-center h-full  ">
      <Card className=" mx-10 w-full ">
        <CardHeader className=" justify-between">
          <Avatar name="User" size="lg" />
          Welcome User
          <p></p>
        </CardHeader>
        <CardBody>
          <h1>Profile</h1>
        </CardBody>
      </Card>
    </div>
  );
}
