"use client";

import { Icon } from "@mui/material";
import {
  Card,
  CardBody,
  Avatar,
  Link,
} from "@nextui-org/react";

import {
  Globe,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ProfileCard(props: any) {
  // Profile Info

  const user = props.user;
  return (
    <>
      <Card isBlurred className=" bg-background/40 w-3/5  text-black ">
        <CardBody className="flex flex-col justify-center items-center">
          <Avatar
            className="w-32 h-32 text-large mb-10"
            color="success"
          />

          <div className="space-y-2 justify-center">
            <h1 className="flex justify-center text-xl font-bold">
              {user.fName} {user.lName}
            </h1>
            <p className="flex justify-center text-gray-500 text-sm">
              {user.job} at {user.organization}
            </p>
            <p className="flex justify-center text-gray-500 text-sm">
              {user.address.state}
            </p>

            <div className="flex justify-center items-center">
              <Link
                target="_blank"
                className="p-4"
                href={`https://${user.socials.website}`}
              >
                <Globe />
              </Link>

              <Link
                target="_blank"
                className="p-4"
                href={`https://github.com/${user.socials.github}`}
              >
                <Github />
              </Link>

              <Link
                target="_blank"
                className="p-4"
                href={`https://www.linkedin.com/in/${user.socials.linkedIn}`}
              >
                <Linkedin />
              </Link>

              <Link
                target="_blank"
                className="p-4"
                href={`https://twitter.com/${user.socials.twitter}`}
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
