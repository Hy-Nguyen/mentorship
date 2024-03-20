import Welcome from "@/components/Welcome";
import SideBarContent from "@/components/SideBarContent";

export default function SideBar() {
  return (
    <>
      <div className=" bg-black w-[30vh] h-[90vh]  p-2 text-black ">
        <div className="bg-slate-400 w-full h-full p-2 rounded-3xl">
          <Welcome />
          <SideBarContent />
        </div>
      </div>
    </>
  );
}
