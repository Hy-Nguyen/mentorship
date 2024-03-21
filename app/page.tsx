import Image from "next/image";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Body from "../components/Body";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row bg-white">
      <SideBar />

      <div className="flex w-full">
        <Body />
      </div>
    </main>
  );
}
