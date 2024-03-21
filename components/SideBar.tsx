import Welcome from "@/components/Welcome";
import SideBarContent from "@/components/SideBarContent";
import {
  Spacer,
  Divider,
} from "@nextui-org/react";

export default function SideBar() {
  return (
    <>
      <div className="bg-slate-400 w-1/5 min-h-screen p-2 hidden lg:block">
        <Welcome />
        <Spacer y={5} />
        <Divider className="" />
        <Spacer y={5} />
        <SideBarContent />
      </div>
    </>
  );
}
