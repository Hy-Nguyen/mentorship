import SideBar from "@/components/sidebar/SideBar";
import { createClient } from "@/utils/supabase/client";
import CreateProfileForm from "@/components/profile/CreateProfile";

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
        .select("name, role, email")
        .eq("UserID", id);

      return User![0];
    } catch (e) {
      console.log(e);
    }

    return user;
  }

  let user: {
    name: string;
    role: string;
    email: string;
  } = await getUser();

  return (
    <div className="flex bg-white">
      <SideBar userID={params.id} />

      <div className=" flex flex-col w-full items-center pt-10 space-y-2">
        <p className="text-black">hi</p>
        <CreateProfileForm user={user} />
      </div>
    </div>
  );
}
