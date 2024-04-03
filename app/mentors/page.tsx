import MentorList from "@/components/mentorList/MentorList";
import SideBar from "@/components/sidebar/SideBar";
import SearchInput from "@/components/mentorList/SearchInput";

export default async function Profile() {
  return (
    <div className="flex bg-white">
      <SideBar userID={23} />
      <div className=" flex flex-col w-full items-center pt-10 space-y-2">
        <div className=" flex flex-row w-full items-center justify-center space-y-2">

          <h1 className="text-lg text-black font-bold justify-center ">
            Search Mentors: 
          </h1>
          <SearchInput />
        </div>

        <MentorList />
      </div>
    </div>
  );
}
