import LoginSection from "@/components/login/LoginSection";
import { BackgroundBeams } from "@/components/ui/Waves";
import {
  Card,
  CardBody,
} from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  const img = `https://images.unsplash.com/photo-1579187707643-35646d22b596?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  return (
    <div className="min-h-screen w-full h-1/2 px-10  bg-gray-50 relative flex flex-row justify-center  ">
      <Image
        alt="Mountain Background"
        src={img}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-2/3 flex justify-center pt-[12%] ">
        <Card
          className=" w-3/4 h-1/4 min-h-[150px]"
          isBlurred
        >
          <CardBody className="flex justify-center space-y-4">
            <div>
              <h1 className="text-center font-bold ">
                Your One Stop for All Mentorship
              </h1>
            </div>
            <div className="text-center">
              <p className="text-center text-gray-500 text-sm">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
          </CardBody>
        </Card>
        I
      </div>
    </div>
  );
}
