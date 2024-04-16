"use client";

import {
  Card,
  Input,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import { useState } from "react";

export default function CreateProfileForm(props: {
  user: {
    UserID: number;
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

  const [email, setEmail] = useState(
    props.user.email
  );
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    var splitName = name.split(" ");

    let reqBody = {
      id: props.user.UserID,
      fName: splitName[0],
      lName: splitName[1],
      email: email,
      phone: phone,
      organization: organization,
      job: title,
      address: {
        city: city,
        state: state,
        street: "",
        zipCode: "",
      },
      socials: {
        github: github,
        twitter: twitter,
        website: website,
        linkedIn: linkedin,
      },
    };

    try {
      const response = await fetch(
        `https://mentorship-chi.vercel.app/api/profiles/create/${props.user.UserID}`,
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
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="flex bg-white">
        <form onSubmit={handleSubmit}>
          <Card className="flex  justify-center items-center">
            <CardHeader className=" flex justify-center items-center ">
              <h1 className="text-[24px] font-bold mt-[20px] mb-[-20px]">
                User Info
              </h1>
            </CardHeader>
            <div className="flex flex-row">
              <CardBody className="flex justify-center">
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
                </div>
              </CardBody>
              <CardBody>
                <div className=" px-10 pt-10 space-y-4 flex flex-col ">
                  <div className="flex flex-row space-x-2">
                    <Input
                      type="email"
                      value={email}
                      onValueChange={setEmail}
                      label="E-Mail"
                      labelPlacement="outside"
                      className="w-full"
                      isReadOnly
                    />
                    <Input
                      type="string"
                      value={website}
                      onValueChange={setWebsite}
                      label="Website"
                      labelPlacement="outside"
                      className="w-full"
                    />
                  </div>

                  <div className=" flex justify-between items-end">
                    <Input
                      type="string"
                      value={github}
                      onValueChange={setGithub}
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
                  <div className=" flex justify-between items-end">
                    <Input
                      type="string"
                      value={linkedin}
                      onValueChange={setLinkedin}
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
                  <div className=" flex justify-between items-end">
                    <Input
                      type="string"
                      value={twitter}
                      onValueChange={setTwitter}
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
              </CardBody>
            </div>
            <CardFooter>
              <div className="w-full space-x-2 my-8 flex justify-center">
                <Button
                  className="w-1/3 text-black hover:text-white"
                  color="success"
                  variant="shadow"
                  type="submit"
                >
                  Create
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}
