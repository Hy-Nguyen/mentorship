import SideBar from "../../components/sidebar/SideBar";

import ProfileCard from "@/components/profile/ProfileCard";
import SocialCard from "@/components/profile/SocialCard";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Tags from "@/components/profile/TagsCard";
import Interests from "@/components/dashboard/Interests";

export default async function Profile() {
  const id = 23;
  const response = await fetch(
    `http://localhost:3000/api/profiles/${id}`,
    { cache: "no-store" }
  );
  const user = await response.json();

  return (
    <div className="flex bg-white">
      <SideBar />

      <div className=" flex flex-col w-full items-center pt-10 space-y-2">
        <ProfileCard user={user} />
        <ProfileInfo user={user} />
        <SocialCard user={user} />
        {/* <Interests /> */}
      </div>
    </div>
  );
}
