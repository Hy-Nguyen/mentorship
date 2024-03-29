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

export default function ProfileInfo(props: any) {
  const [editView, setEditView] = useState(false);
  const user = props.user;

  function discardChanges(e: MouseEventHandler) {
    setEditView(!editView);
  }

  function updateProfile(e: Event) {
    e.preventDefault();
    setEditView(!editView);
  }

  return (
    <div className="flex-col flex w-3/5 space-y-4">
      <h1 className="text-black text-xl font-bold pt-4">
        Your Info
      </h1>
      <Card className=" bg-gray-50 h-full  text-black ">
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
                    placeholder={user.fName}
                    label="First Name"
                    labelPlacement="outside"
                    className="w-1/3"
                  />
                  <Input
                    type="string"
                    placeholder={user.lName}
                    label="Last Name"
                    labelPlacement="outside"
                    className="w-1/3"
                  />
                  <Input
                    type="tel"
                    placeholder={user.phone}
                    label="Phone Number"
                    labelPlacement="outside"
                    className="w-1/3"
                  />
                </div>

                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={
                      user.organization
                    }
                    label="Organization"
                    labelPlacement="outside"
                    className=""
                  />
                </div>

                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={user.job}
                    label="Current Title"
                    labelPlacement="outside"
                    className=""
                  />
                </div>

                <div className=" flex justify-between items-end">
                  <div className="flex flex-row space-x-2 w-full">
                    <Input
                      type="string"
                      placeholder={
                        user.address.city
                      }
                      label="City"
                      labelPlacement="outside"
                      className="w-1/2"
                    />
                    <Input
                      type="string"
                      placeholder={
                        user.address.state
                      }
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
