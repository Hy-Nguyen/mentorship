"use client";

import {
  Card,
  CardBody,
  Divider,
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
  return (
    <div className="flex-col flex w-1/2 space-y-4">
      <div>
        <h1 className="text-black text-xl font-bold ">
          Your Socials
        </h1>
      </div>
      <Card className=" bg-gray-50 w-full h-full text-black flex justify-center">
        <CardBody>
          <div className="p-5 space-y-3 flex flex-col ">
            <div className=" flex justify-between items-end">
              <h1 className="text-lg font-bold">
                Email:
              </h1>
              <p>{user.email}</p>
            </div>
            <Divider className="mx-2" />
            <div className=" flex justify-between items-end">
              <h1 className="text-lg font-bold">
                Website:
              </h1>
              <p>{user.socials.website}</p>
            </div>
            <Divider className="mx-2" />

            <div className=" flex justify-between items-end">
              <h1 className="text-lg font-bold">
                GitHub:
              </h1>
              <p>{user.socials.github}</p>
            </div>
            <Divider className="mx-2" />

            <div className=" flex justify-between items-end">
              <h1 className="text-lg font-bold">
                LinkedIn:
              </h1>
              <p>{user.socials.linkedIn}</p>
            </div>
            <Divider className="mx-2" />

            <div className=" flex justify-between items-end">
              <h1 className="text-lg   font-bold">
                Handshake:
              </h1>
              <div>{user.socials.handshake}</div>
            </div>
            <Divider className="mx-2" />

            <div className=" flex justify-between items-end">
              <h1 className="text-lg   font-bold">
                Twitter:
              </h1>
              <div>{user.socials.twitter}</div>
            </div>
          </div>
        </CardBody>
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
