import AddMentor from "@/components/mentorList/AddMentor";
import MentorList from "@/components/mentorList/MentorList";
import SideBar from "@/components/sidebar/SideBar";
import {
  Card,
  CardBody,
} from "@nextui-org/react";

export default async function Mentor({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="flex bg-white">
      <SideBar userID={params.id} />

      <div className=" flex flex-row w-full py-2 px-4 space-y-2">
        <Card>
          <CardBody className="flex flex-row w-full">
            <MentorList />
            <AddMentor studentID={params.id}/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
