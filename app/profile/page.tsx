import Image from "next/image";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Body from "../../components/Body";

import { Card, CardBody } from "@nextui-org/react";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        
        <SideBar />

        <div className="flex flex-col w-full">   
            <Card className=" bg-white w-1/5 h-1/2 p-2 mt-2 text-black ">
            <CardBody>
              <p>Hi</p>
            </CardBody>
            </Card>


            <Card className=" bg-white w-1/5 h-1/2 p-2 mt-2 text-black ">
            <CardBody>
              <p>Hi</p>
            </CardBody>
            </Card>
            
            <Card className=" bg-white w-full h-1/2 p-2 mt-2 text-black ">
            <CardBody>
              <p>Hi</p>
            </CardBody>
            </Card>
        

          </div>
      </div>
    
    </main>
  );
  
}
