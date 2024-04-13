import SideBar from "@/components/sidebar/SideBar";
import { createClient } from "@/utils/supabase/client";
import CreateProfileForm from "@/components/profile/CreateProfile";
import {
  Card,
  CardBody,
  Spinner,
} from "@nextui-org/react";

import { redirect } from "next/navigation";

export default async function CreateProfile({
  params,
}: {
  params: { id: number };
}) {
  async function getUser() {
    const id = params.id;
    const supabase = createClient();

    try {
      const { data: User, error } = await supabase
        .from("Users")
        .select("UserID, name, role, email")
        .eq("UserID", id);

      return User![0];
    } catch (e) {
      console.log(e);
    }

    return user;
  }

  async function checkProfile() {
    const supabase = createClient();
    const id = params.id;

    try {
      const { data: User, error } = await supabase
        .from("Profiles")
        .select()
        .eq("id", id);

      if (User?.length != 0) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }

  let user: {
    UserID: number;
    name: string;
    role: string;
    email: string;
  } = await getUser();

  if (await checkProfile()) {
    redirect(`/profile/${user.UserID}`);
  }

  return (
    <div className="flex bg-white">
      <SideBar userID={params.id} />

      <div className="flex flex-col w-full items-center pt-[10%] space-y-2">
        {!(await checkProfile()) ? (
          <CreateProfileForm user={user} />
        ) : (
          <>
            <div className="flex flex-col w-full items-center pt-[10%] space-y-2">
              <Card className="w-1/2 h-[100px] ">
                <CardBody className="flex justify-center items-center">
                  <h1 className="text-[24px] font-bold">
                    Profile Already Created!
                  </h1>
                  <p>
                    Redirecting to Profile Page
                  </p>
                  <Spinner />
                </CardBody>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
