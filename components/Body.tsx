import Appointments from "./Appointments";
import Calendar from "./Calendar";
import Chat from "./Chat";
import Mentors from "./Mentors";
import QuickAction from "./QuickAction";
import UserProfile from "./UserProfileDash";

export default function Body() {
  return (
    <div className="flex-col flex w-full ">
      <div className="flex flex-row w-full h-3/5">
        <div className="flex flex-col w-5/6 h-full p-4">
          <QuickAction />
          <Mentors />
        </div>

        <div className="h-full w-5/6 ">
          <UserProfile />
        </div>
      </div>
      <div className="bg-slate-500 h-full flex">
        <Appointments />
        <Calendar />
        <Chat />
      </div>
    </div>
  );
}
