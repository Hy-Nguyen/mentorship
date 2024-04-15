import AddMentor from "@/components/mentorList/AddMentor";
import MentorList from "@/components/mentorList/MentorList";
import SideBar from "@/components/sidebar/SideBar";

export default async function Mentor({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="flex bg-white">
      <SideBar userID={params.id} />

      <div className=" flex flex-col w-full items-center pt-10 space-y-2">
        <MentorList />
        <AddMentor />
      </div>
    </div>
  );
}
