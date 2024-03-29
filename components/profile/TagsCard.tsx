"use client";

import {
  Card,
  CardBody,
} from "@nextui-org/react";

export default function Tags() {
  return (
    <div className="flex-col flex w-1/3 space-y-4">
      <div>
        <h1 className="text-black text-xl font-bold ">
          Your Tags
        </h1>
      </div>
      <Card className=" bg-gray-50 w-full h-full  m-2 mt-0 marker:float-left text-black ">
        <CardBody></CardBody>
      </Card>
    </div>
  );
}
