import Appointments from "./Appointments";
import Calendar from "./Calendar";
import Chat from "./Chat";
import Mentors from "./Mentors";
import QuickAction from "./QuickAction";
import UserProfile from "./UserProfileDash";

import React from "react";

export default function Body() {
  return (
    <div className="flex-col flex w-full bg-gray-50  ">
      <div className="flex flex-row w-full h-3/5">
        <div className="flex flex-col w-5/6 h-full p-4">
          <QuickAction />
          <Mentors />
        </div>

        <div className="flex h-full w-5/6 p-4">
          {/* https://dribbble.com/shots/17852674-Profile-Card */}
          <UserProfile />
        </div>
      </div>
      <div className=" h-full flex space-x-4">
        <Appointments />
        <Calendar />
        {/* <Chat /> */}
      </div>
    </div>
  );
}
