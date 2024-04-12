import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";

import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Github,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";

// User Profile fetch. Show user PFP, and bio below. Also show age, as well as account tags
export default async function UserProfile(props: {
  userID: number;
}) {
  const id = props.userID;
  const response = await fetch(
    `http://localhost:3000/api/profiles/${id}`,
    { cache: "no-store" }
  );

  if (response.status === 200) {
    const user = await response.json();

    return (
      <div className="flex flex-col items-start w-full justify-center h-full">
        <div>
          <h1 className="text-black font-bold text-xl">
            Profile
          </h1>
        </div>
        <Card className=" bg-gray-50 w-11/12  text-black ">
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
                href={`https://www.linkedin.com/in/${user.socials.linkedin}`}
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
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-start w-full justify-center h-full">
        <div>
          <h1 className="text-black font-bold text-xl">
            Profile
          </h1>
        </div>
        <Card className=" bg-gray-50 w-11/12  text-black ">
          <CardBody className="flex flex-col justify-center items-center">
            <Avatar
              className="w-32 h-32 text-large mb-10"
              color="default"
            />

            <div className="space-y-2 flex flex-col items-center justify-center">
              <h1 className="flex justify-center text-xl font-bold">
                Profile Not Created
              </h1>
              <Link href={`/createProfile/${id}`}>
                <Button
                  color="warning"
                  variant="bordered"
                >
                  Create Profile Here
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
