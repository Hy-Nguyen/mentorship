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

          {/* <div className="flex justify-center">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 
                text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-1/2 m-2"
            >
              Follow
            </button>

            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 
                hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 w-1/2 m-2"
            >
              Message
            </button>
          </div> */}
        </CardBody>
      </Card>
    </>
  );
}
