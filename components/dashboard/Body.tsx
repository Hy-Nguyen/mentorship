import Appointments from "./Appointments";
import Calendar from "./Calendar";
import Chat from "./Chat";
import Interests from "./Interests";
import Mentee from "./Mentee";
import Mentors from "./Mentors";
import QuickAction from "./QuickAction";
import UserProfile from "./UserProfileDash";

import React from "react";

export default function Body(props: any) {
  let userID = props.userID;
  let role = props.role;

  return (
    <div className="flex-col flex w-full bg-gray-50  ">
      <div className="flex flex-row w-full h-3/5">
        <div className="flex flex-col w-5/6 h-full p-4">
          <QuickAction />
          {role === "mentor" ? (
            <Mentors userID={userID} />
          ) : (
            <Mentee userID={userID} />
          )}
        </div>

        <div className="flex h-full w-5/6 p-4">
          <UserProfile userID={userID} />
        </div>
      </div>
      <div className=" h-full flex space-x-10">
        <Appointments userID={userID} />
        <Calendar />
        <Interests userID={userID} />
      </div>
    </div>
  );
}
