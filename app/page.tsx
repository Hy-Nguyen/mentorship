import Image from "next/image";
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import Body from "../components/Body"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar/>
      <SideBar/>
      <Body/>                     
    </main>
  );
}
