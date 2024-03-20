import Image from "next/image";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Body from "../../components/Body";
import HalfBar from "@/components/HalfBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        {/* <SideBar /> */}

        <div className=" bg-black w-[15%] h-[90vh] p-2 text-black ">
            <div className="bg-slate-400 w-full h-full p-2 rounded-3xl">
                <Welcome />
                <SideBarContent />
            </div>
        </div>
        
        
        <div className=" bg-black w-[20%] h-[90vh] p-2 text-black ">
          <div className="bg-slate-400 w-full h-1/2 p-2 rounded-3xl"></div>
        </div>

        <div className=" bg-black w-[20%] h-[90vh] p-2 text-black ">
            <div className="bg-slate-400 w-full h-1/2 p-2 rounded-3xl"></div>
        </div>

        <div className=" bg-black w-[20%] h-[90vh] p-2 text-black ">
            <div className="bg-slate-400 w-full h-1/2 p-2 rounded-3xl"></div>
        </div>



    </div>

    </main>
  );
}
