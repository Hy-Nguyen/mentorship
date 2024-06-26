import Appointments from "./Appointments";
import Calendar from "./Calendar";
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
    <div className="flex-col flex w-full   ">
      <div className="flex flex-row w-full h-3/5">
        <div className="flex flex-col w-1/2 h-full pl-4">
          <QuickAction userID={userID} />

          {role === "mentor" ? (
            <Mentors userID={userID} />
          ) : (
            <Mentee userID={userID} />
          )}
        </div>

        <div className="flex h-full w-1/2 p-4">
          <UserProfile userID={userID} />
        </div>
      </div>
      <div className=" h-full flex space-x-10">
        <Appointments
          role={props.role}
          userID={userID}
        />
        <Calendar />
        <Interests userID={userID} />
      </div>
    </div>
  );
}
