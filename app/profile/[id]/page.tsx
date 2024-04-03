import SideBar from "@/components/sidebar/SideBar";

import ProfileCard from "@/components/profile/ProfileCard";
import SocialCard from "@/components/profile/SocialCard";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Tags from "@/components/profile/TagsCard";

export default async function Profile({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const response = await fetch(
    `http://localhost:3000/api/profiles/${id}`
  );
  const user = await response.json();

  return (
    <div className="flex bg-white">
      <SideBar userID={id}/>

      <div className=" flex flex-col w-full items-center pt-10 space-y-2">
        <ProfileCard user={user} />
        <ProfileInfo user={user} />
        <SocialCard user={user} />
        <Tags />
        <Tags />
      </div>
    </div>
  );
}
