"use client";
import React from "react";
import SideBar from "@/components/sidebar/SideBar";
import ResumeUploadCard from "@/components/upload/ResumeUploadCard";
import TranscriptUploadCard from "@/components/upload/TranscriptUploadCard";
import FeaturedUploadCard from "@/components/upload/FeaturedMediaUploadCard";

// ================== COLORS AND BORDERS FOR LEARNING PURPOSES ===================

export default function App() {
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className="border-0 border-red-200 flex-col flex w-full h-auto bg-gray-50 px-4 pt-8">
          <h1 className="text-xl text-black font-bold">Upload Media</h1>
          <div className="border-0 border-green-300 h-4/5 flex flex-row justify-around items-center pb-4">
            <ResumeUploadCard />
            <TranscriptUploadCard />
            <FeaturedUploadCard />
          </div>
        </div>
      </div>
    </>
  );
}
