"use client";

import {
  Card,
  CardBody,
  Avatar,
} from "@nextui-org/react";

export default function ProfileCard(props: any) {
  // Profile Info

  const user = props.user;
  return (
    <>
      <Card className=" bg-gray-50 w-3/5  text-black ">
        <CardBody className="flex flex-col justify-center items-center">
          <Avatar
            className="w-32 h-32 text-large mb-10"
            color="success"
          />

          <div className="space-y-2">
            <h1 className="flex justify-center text-xl font-bold">
              {user.fName} {user.lName}
            </h1>
            <p className="flex justify-center text-gray-500 text-sm">
              {user.job} at {user.organization}
            </p>
            <p className="flex justify-center text-gray-500 text-sm">
              {user.address.state}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
