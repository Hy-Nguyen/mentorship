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

        <div className="bg-blue flex flex-col w-1/3 p-2">   
            <Card className=" bg-slate-400 w-full h-1/2 p-2 m-2 text-black ">
            <CardBody>
              <p>Avatar</p>
            </CardBody>
            </Card>           

            <Card className=" bg-slate-400 w-full h-1/2 p-2 m-2 text-black ">
            <CardBody>
              <p>Social Links</p>
            </CardBody>
            </Card>   
        </div>

    <div className="bg-black flex flex-col w-full">

          <div className="flex items-center justify-center m-2 bg-black w-full h-1/2 p-2">  

            <Card className=" bg-slate-400 w-full h-full p-2 m-2 text-black ">
            <CardBody>
              <p>Names</p>
            </CardBody>
            </Card>
            
          </div>
            

          <div className="bg-gray flex flex-row justify-center h-1/2 w-full p-2 m-2">  

            <Card className=" bg-slate-400 w-1/2 h-full  m-2 mt-0 marker:float-left text-black ">
            <CardBody>
              <p>example 1</p>
            </CardBody>
            </Card>

            <Card className=" bg-slate-400 w-1/2 h-full  m-2 mt-0 text-black ">
            <CardBody>
              <p>example 2</p>
            </CardBody>
            </Card>

          </div>
    </div>        
        

      </div>
    
    </main>
  );
  
}
