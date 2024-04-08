import CreateAppointment from "@/components/appointment/CreateForm";
import MentorList from "@/components/mentorList/MentorList";
import SideBar from "@/components/sidebar/SideBar";

import { createClient } from "@/utils/supabase/client";
import { divider } from "@nextui-org/react";

async function getType(id: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("Users")
      .select("role")
      .eq("UserID", id);

    return data![0].role;
  } catch (e) {
    console.log(e);
  }
}

async function getName(id: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("Users")
      .select("name")
      .eq("UserID", id);

    return { name: data![0].name, id: id };
  } catch (e) {
    console.log(e);
    return "Account Does Not Exist";
  }
}

async function getMentors() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("Users")
      .select("name, UserID")
      .eq("role", "mentor");

    return data;
  } catch (e) {
    console.log(e);
    return "Account Does Not Exist";
  }
}

async function getMentees() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("Users")
      .select("name, UserID")
      .eq("role", "mentee");

    return data;
  } catch (e) {
    console.log(e);
    return "Account Does Not Exist";
  }
}

function createAppointment(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();
}

export default async function Appointment({
  params,
}: {
  params: { id: string };
}) {
  let type = await getType(params.id);

  return (
    <div className="flex bg-white">
      <SideBar userID={params.id} />

      <div className=" flex flex-col w-full items-center justify-center pt-10 space-y-2 ">
        <div className="w-full flex flex-col items-center space-y-4 justify-center">
          <h1 className="text-[24px] text-black">
            Create an Appointment
          </h1>
          <CreateAppointment
            user={await getName(params.id)}
            type={type}
            mentorList={await getMentors()}
            menteeList={await getMentees()}
          />
        </div>
      </div>
    </div>
  );
}
