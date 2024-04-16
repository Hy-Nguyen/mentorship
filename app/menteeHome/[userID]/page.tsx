import Image from "next/image";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/sidebar/SideBar";
import Body from "@/components/dashboard/Body";

import { useRouter } from "next/navigation";

export default function Home({
  params,
}: {
  params: { userID: string };
}) {
  return (
    <div className="flex min-h-screen flex-row">
      <SideBar userID={params.userID} />

      <div className="flex w-full">
        <Body
          role={"mentee"}
          userID={params.userID}
        />
      </div>
    </div>
  );
}
