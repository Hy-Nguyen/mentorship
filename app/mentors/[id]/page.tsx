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
    <div className="flex h-full pb-20">
      <SideBar userID={params.id} />

      <div className=" flex flex-row w-full mt-2 mx-8  py-2 justify-center">
        <Card
          isBlurred
          className="bg-background/10 flex flex-row px-4"
        >
          <CardBody className="flex flex-row w-1/2 justify-center">
            <MentorList />
          </CardBody>
          <CardBody className="w-1/2 flex items-center justify-center">
            <AddMentor studentID={params.id} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
