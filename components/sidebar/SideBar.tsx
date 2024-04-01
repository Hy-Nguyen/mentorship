import SideBarContent from "@/components/sidebar/SideBarContent";

export default function SideBar() {
  return (
    <>
      <div className="bg-slate-400 w-1/5 min-h-screen p-2 hidden lg:block md:w-1/6">
        <SideBarContent />
      </div>
    </>
  );
}
