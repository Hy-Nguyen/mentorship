"use client";

import {
  Button,
  Card,
  CardBody,
  Divider,
  Input,
} from "@nextui-org/react";

import {
  Globe,
  Mail,
  Github,
  Linkedin,
  Handshake,
  Twitter,
} from "lucide-react";

import { useState } from "react";

export default function SocialCard(props: any) {
  const user = props.user;
  const [editView, setEditView] = useState(false);

  function submitForm(e: Event) {
    e.preventDefault();
    setEditView(!editView);
  }
  return (
    <div className="flex-col flex w-3/5 space-y-4 pt-4">
      <div>
        <h1 className="text-black text-xl font-bold ">
          Your Socials
        </h1>
      </div>
      <Card className=" bg-gray-50 w-full  text-black flex justify-center">
        {!editView ? (
          <CardBody>
            <div className="p-5 space-y-3 flex flex-col ">
              <div className=" flex justify-between items-end">
                <div className="flex flex-row items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <h1 className="text-lg font-bold">
                    Email:
                  </h1>
                </div>
                <p>{user.email}</p>
              </div>
              <Divider className="mx-2" />
              <div className=" flex justify-between items-end">
                <div className="flex flex-row items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <h1 className="text-lg font-bold">
                    Website:
                  </h1>
                </div>
                <p>{user.socials.website}</p>
              </div>
              <Divider className="mx-2" />

              <div className=" flex justify-between items-end">
                <div className="flex flex-row items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <h1 className="text-lg font-bold">
                    GitHub:
                  </h1>
                </div>
                <p>{user.socials.github}</p>
              </div>
              <Divider className="mx-2" />

              <div className=" flex justify-between items-end">
                <div className="flex flex-row items-center space-x-2">
                  <Linkedin className="w-5 h-5" />
                  <h1 className="text-lg font-bold">
                    LinkedIn:
                  </h1>
                </div>
                <p>{user.socials.linkedIn}</p>
              </div>
              <Divider className="mx-2" />

              {/* <div className=" flex justify-between items-end">
                <div className="flex flex-row items-center space-x-2">
                  <Handshake className="w-5 h-5" />
                  <h1 className="text-lg   font-bold">
                    Handshake:
                  </h1>
                </div>
                <div>
                  {user.socials.handshake}
                </div>
              </div>
              <Divider className="mx-2" /> */}

              <div className=" flex justify-between items-end">
                <div className="flex flex-row items-center space-x-2">
                  <Twitter className="w-5 h-5" />
                  <h1 className="text-lg   font-bold">
                    Twitter:
                  </h1>
                </div>
                <div>{user.socials.twitter}</div>
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
          </CardBody>
        ) : (
          <form onSubmit={submitForm}>
            <CardBody>
              <div className="p-5 space-y-3 flex flex-col ">
                <div className=" flex justify-between items-end">
                  <Input
                    type="email"
                    placeholder={user.email}
                    label="E-Mail"
                    labelPlacement="outside"
                    className="w-full"
                  />
                </div>
                <Divider className="mx-2" />
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={
                      user.socials.website
                    }
                    label="Website"
                    labelPlacement="outside"
                    className="w-full"
                  />
                </div>
                <Divider className="mx-2" />
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={
                      user.socials.github
                    }
                    label="GitHub"
                    labelPlacement="outside"
                    className="w-full"
                    startContent={
                      <p className="text-sm">
                        https://github.com/
                      </p>
                    }
                  />
                </div>
                <Divider className="mx-2" />
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={
                      user.socials.linkedIn
                    }
                    label="LinkedIn"
                    labelPlacement="outside"
                    className="w-full"
                    startContent={
                      <p className="text-sm">
                        https://linkedin.com/in/
                      </p>
                    }
                  />
                </div>
                <Divider className="mx-2" />
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={
                      user.socials.handshake
                    }
                    label="Handshake"
                    labelPlacement="outside"
                    className="w-full"
                    startContent={
                      <p className="text-sm">
                        https://handshake.com/
                      </p>
                    }
                  />
                </div>
                <Divider className="mx-2" />
                <div className=" flex justify-between items-end">
                  <Input
                    type="string"
                    placeholder={
                      user.socials.twitter
                    }
                    label="Twitter"
                    labelPlacement="outside"
                    className="w-full"
                    startContent={
                      <p className="text-sm">
                        https://twitter.com/
                      </p>
                    }
                  />
                </div>
              </div>
              <div className="w-full space-x-2 flex justify-between">
                <Button
                  className="w-1/2"
                  color="danger"
                  variant="bordered"
                  type="reset"
                  onClick={() =>
                    setEditView(!editView)
                  }
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
            </CardBody>
          </form>
        )}
      </Card>
      {/* <Card className="w-full">
        <CardBody>
          <button
            onClick={() => setEditView(!editView)}
          >
            Edit Profile
          </button>
        </CardBody>
      </Card> */}
    </div>
  );
}
