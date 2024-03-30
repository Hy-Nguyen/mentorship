import React from "react";
import SideBar from "../../components/SideBar";
import Uploader from "@/components/upload/Uploader";
import UploCheckList from "@/components/upload/CheckList";

// ================== COLORS AND BORDERS FOR LEARNING PURPOSES ===================

export default function App() {
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="border-3 border-red-300 flex-col flex w-full bg-gray-50 justify-center items-center"> {/*Possibly replace with card component*/ }
          <div className="border-3 border-blue-300 flex-row flex w-3/4 h-4/5 ">
            <Uploader />
            <UploCheckList />
          </div>
        </div>
      </div>
    </>
  );
}
