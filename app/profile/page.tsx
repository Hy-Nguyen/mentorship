"use client";

import SideBar from "../../components/SideBar";

import { useState } from "react";

import {
  Avatar,
  Card,
  CardBody,
  Divider,
  Input,
} from "@nextui-org/react";
import ProfileCard from "@/components/profile/ProfileCard";
import SocialCard from "@/components/profile/SocialCard";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Tags from "@/components/profile/TagsCard";

export default function Profile() {
  const user = {
    fName: "John",
    lName: "Doe",
    email: "Johndoe123@URL.com",
    phone: "480 420 6969",
    organization: "ASU",
    job: "College Advisor",
    address: {
      street: "1151 S Forest Ave",
      city: "Tempe",
      state: "Arizona",
      zipCode: "85201",
    },
    socials: {
      website: "johndoe.com",
      github: "Johndoe123",
      linkedIn: "Johndoe123",
      handshake: "Johndoe123",
      twitter: "Johndoe123",
    },
  };
  return (
    <div className="flex bg-white">
      <SideBar />
      {/* Body */}
      <div className=" flex flex-col w-full ">
        <div className="flex flex-row w-full h-1/2 p-4 space-x-8">
          <ProfileCard user={user} />
          <ProfileInfo user={user} />
        </div>
        <div className="flex flex-row h-1/2 w-full p-4 space-x-4">
          <SocialCard user={user} />
          <Tags />
          <Tags />
        </div>
      </div>
    </div>
  );
}
