"use client";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
} from "@nextui-org/react";
import {
  MouseEventHandler,
  useState,
} from "react";

import { useRouter } from "next/navigation";

export default function ProfileInfo(props: any) {
  const user = props.user;
  let router = useRouter();

  const [editView, setEditView] = useState(false);
  const [fName, setFName] = useState(user.fName);
  const [lName, setLName] = useState(user.lName);
  const [phone, setPhone] = useState(user.phone);
  const [organization, setOrganization] =
    useState(user.organization);
  const [title, setTitle] = useState(user.job);
  const [city, setCity] = useState(
    user.address.city
  );
  const [state, setState] = useState(
    user.address.state
  );

  function discardChanges(e: any) {
    setPhone(user.phone);
    setOrganization(user.organization);
    setTitle(user.job);
    setCity(user.address.city);
    setState(user.address.state);
    setEditView(!editView);
  }

  async function updateProfile(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    let reqBody = {
      id: user.id,
      fName: fName,
      lName: lName,
      phone: phone,
      organization: organization,
      job: title,
      address: {
        city: city,
        state: state,
        street: user.address.street,
        zipCode: user.address.zipCode,
      },
    };
    try {
      const response = await fetch(
        "http://localhost:3000/api/profiles/update/info",
        {
          cache: "no-store",
          method: "POST",
          body: JSON.stringify(reqBody),
        }
      );
      if (!response.ok) {
        throw new Error(
          "Network response was not ok"
        );
      }
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
    }

    setEditView(!editView);
    router.refresh();
  }

  return (
    <div className="flex-col flex w-3/5 space-y-4">
      <h1 className="text-black text-xl font-bold pt-4">
        Your Info
      </h1>
      <Card
        isBlurred
        className=" bg-background/40 h-full  text-black "
      >
        {!editView ? (
          <CardBody className="flex justify-center">
            <div className="p-5 space-y-3 flex flex-col ">
              <div className=" flex justify-between items-end">
                <h1 className="text-lg font-bold">
                  Name:
                </h1>
                <p>
                  {user.fName} {user.lName}
                </p>
              </div>

              <Divider className="mx-2" />

              <div className=" flex justify-between items-end">
                <h1 className="text-lg font-bold">
                  Organization:
                </h1>
                <p>{user.organization}</p>
              </div>

              <Divider className="mx-2" />

              <div className=" flex justify-between items-end">
                <h1 className="text-lg font-bold">
                  Current Title:
                </h1>
                <p>{user.job}</p>
              </div>

              <Divider className="mx-2" />

              <div className=" flex justify-between items-end">
                <h1 className="text-lg font-bold">
                  Phone Number:
                </h1>
                <p>{user.phone}</p>
              </div>

              <Divider className="mx-2" />

              <div className=" flex justify-between items-end">
                <h1 className="text-lg   font-bold">
                  Location:
                </h1>
                <div>
                  {`${user.address.city}, ${user.address.state}`}
                </div>
              </div>

              <div className="w-full flex justify-center">
                <Button
                  className="w-1/4"
                  onClick={() =>
                    setEditView(!editView)
                  }
                  color="warning"
                  variant="bordered"
                >
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardBody>
        ) : (
          <CardBody className="flex justify-center">
            <form onSubmit={updateProfile}>
              <div className=" px-10 pt-10 space-y-4 flex flex-col ">
                <div className="flex flex-row space-x-2">
                  <Input
                    type="string"
                    value={fName}
                    label="First Name"
                    labelPlacement="outside"
                    className="w-1/3"
                    isReadOnly
                  />
                  <Input
                    type="string"
                    value={lName}
                    label="Last Name"
                    labelPlacement="outside"
                    className="w-1/3"
                    isReadOnly
                  />
                  <Input
                    type="tel"
                    value={phone}
                    onValueChange={setPhone}
                    label="Phone Number"
                    labelPlacement="outside"
                    className="w-1/3"
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
                <div className="w-full space-x-2 flex justify-between">
                  <Button
                    className="w-1/2"
                    color="danger"
                    variant="bordered"
                    type="reset"
                    onClick={discardChanges}
                  >
                    Discard
                  </Button>
                  <Button
                    className="w-1/2"
                    color="success"
                    variant="shadow"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        )}
      </Card>
    </div>
  );
}
