import SideBar from "@/components/sidebar/SideBar";

import ProfileCard from "@/components/profile/ProfileCard";
import SocialCard from "@/components/profile/SocialCard";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Tags from "@/components/profile/TagsCard";
import Interests from "@/components/dashboard/Interests";
import UserProfile from "@/components/dashboard/UserProfileDash";

export default async function Profile({
  params,
}: {
  params: { id: number };
}) {
  async function getUser() {
    const id = params.id;
    const response = await fetch(
      `http://localhost:3000/api/profiles/${id}`,
      { cache: "no-store" }
    );
    const user = await response.json();

    return user;
  }

  let user = await getUser();

  if (user.error) {
    return (
      <>
        <div className="flex pb-20">
          <SideBar userID={params.id} />
          <div className=" flex mx-auto w-1/2 items-center justify-center ">
            <UserProfile userID={params.id} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex pb-20">
        <SideBar userID={params.id} />

        <div className=" flex flex-col w-full items-center pt-10 space-y-2">
          <ProfileCard user={await getUser()} />
          <ProfileInfo user={await getUser()} />
          <SocialCard user={await getUser()} />
          {/* <Interests /> */}
          <div
            id="spacer"
            className="py-[50px]"
          ></div>
        </div>
      </div>
    );
  }
}
