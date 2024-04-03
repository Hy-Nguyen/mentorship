import MentorList from "@/components/mentorList/MentorList";
import SideBar from "@/components/sidebar/SideBar";

export default async function Profile() {
  return (
    <div className="flex bg-white">
      <SideBar userID={23} />

      <div className=" flex flex-col w-full items-center pt-10 space-y-2">
        <MentorList />
      </div>
    </div>
  );
}
