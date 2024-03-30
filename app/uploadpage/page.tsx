import React from "react";
import Image from "next/image";
// import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
// import Body from "../../components/Body";
import { Button } from "@nextui-org/react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";

// ================== COLORS AND BORDERS FOR LEARNING PURPOSES ===================

export default function App() {
   return (
     <>
       <div className="flex w-full">
         <SideBar />

         <div className="border-3 border-red-300 flex-col flex w-full bg-gray-50  ">
           <div className="border-3 border-blue-300 flex flex-row w-full h-3/5">

             <Card className="w-2/12 h-2/3 ml-4 mt-4">
               <CardBody className="w-auto h=100% p-0 bg-slate-200 flex justify-center items-center">
                 <img
                   src="/sampleResume.png"
                   alt="Preview of Transcript"
                   style={{
                     width: "80%",
                     height: "90%",
                     borderRadius: "10px",
                   }}
                 />
               </CardBody>
               <CardFooter className=" w-auto h-100% p-0 my-2 flex justify-center items-center rounded-none">
                 <div>
                   <Button color="primary" variant="solid" size="lg">
                     Preview Resume
                   </Button>
                 </div>
               </CardFooter>
             </Card>

             <Card className="w-2/12 h-2/3 ml-4 mt-4">
               <CardBody className="w-auto h=100% p-0 bg-slate-200 flex justify-center items-center">
                 <img
                   src="/sampleResume.png"
                   alt="Preview of Transcript"
                   style={{
                     width: "80%",
                     height: "90%",
                     borderRadius: "10px",
                   }}
                 />
               </CardBody>
               <CardFooter className=" w-auto h-100% p-0 my-2 flex justify-center items-center rounded-none">
                 <div>
                   <Button color="primary" variant="solid" size="lg">
                     Preview Transcript
                   </Button>
                 </div>
               </CardFooter>
             </Card>
           </div>
         </div>
       </div>
     </>
   );
 }
