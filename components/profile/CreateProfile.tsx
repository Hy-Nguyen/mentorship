"use client";

import {
  Card,
  Input,
  CardBody,
  Button,
  CardHeader,
} from "@nextui-org/react";
import { useState } from "react";

export default function CreateProfileForm(props: {
  user: {
    name: string;
    role: string;
    email: string;
  };
}) {
  const [name, setName] = useState(
    props.user.name
  );

  const [phone, setPhone] = useState("");
  const [organization, setOrganization] =
    useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <div className="flex bg-white">
        <Card className="flex justify-center items-center">
          <CardHeader className=" flex justify-center items-center ">
            <h1 className="text-[24px] font-bold mt-[20px] mb-[-20px]">
              User Info
            </h1>
          </CardHeader>
          <CardBody className="flex justify-center">
            <form>
              <div className=" px-10 pt-10 space-y-4 flex flex-col ">
                <div className="flex flex-row space-x-2">
                  <Input
                    type="string"
                    value={name}
                    label="Name"
                    labelPlacement="outside"
                    className="w-1/2"
                    isReadOnly
                  />

                  <Input
                    type="tel"
                    value={phone}
                    onValueChange={setPhone}
                    label="Phone Number"
                    labelPlacement="outside"
                    className="w-1/2"
                  />
                </div>
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    value={organization}
                    onValueChange={
                      setOrganization
                    }
                    label="Organization"
                    labelPlacement="outside"
                    className=""
                  />
                </div>
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    value={title}
                    onValueChange={setTitle}
                    label="Current Title"
                    labelPlacement="outside"
                    className=""
                  />
                </div>
                <div className=" flex justify-between items-end">
                  <div className="flex flex-row space-x-2 w-full">
                    <Input
                      type="string"
                      value={city}
                      onValueChange={setCity}
                      label="City"
                      labelPlacement="outside"
                      className="w-1/2"
                    />
                    <Input
                      type="string"
                      value={state}
                      onValueChange={setState}
                      label="State"
                      labelPlacement="outside"
                      className="w-1/2"
                    />
                  </div>
                </div>
                <div className="w-full space-x-2 flex justify-center">
                  <Button
                    className="w-1/2"
                    color="success"
                    variant="shadow"
                    type="submit"
                  >
                    Create
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
