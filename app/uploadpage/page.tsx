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
      <div className="flex">
        <SideBar />

        <div className="flex flex-wrap justify-center">
          {/* RESUME CARD */}
          <Card className="w-1/3 mt-2 h-[75vh] border-4 border-red-500 p-0 bg-yellow-200 flex flex-col justify-center items-center">
            {/* HEADER */}
            <CardHeader className="w-11/12 m-4 border-4 border-green-500 p-0 rounded-none">
              <img src="/sampleResume.png" alt="Preview of Transcript" />
            </CardHeader>
            {/* BODY */}
            <CardFooter className="w-auto h-100% my-2 border-4 border-blue-500 p-0 flex justify-center items-center rounded-none">
              <div>
                <Button color="primary" variant="solid" size="lg">
                  Preview Resume
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* TRANSCRIPT CARD */}
          <Card className="w-1/3 mt-2 h-[75vh] border-4 border-red-500 p-0 bg-yellow-200 flex flex-col justify-center items-center">
            {/* HEADER */}
            <CardHeader className="w-11/12 m-4 border-4 border-green-500 p-0 rounded-none">
              <img src="/sampleResume.png" alt="Preview of Transcript" />
            </CardHeader>
            {/* BODY */}
            <CardFooter className="w-auto h-100% my-2 border-4 border-blue-500 p-0 flex justify-center items-center rounded-none">
              <div>
                <Button color="primary" variant="solid" size="lg">
                  Preview Transcript
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
