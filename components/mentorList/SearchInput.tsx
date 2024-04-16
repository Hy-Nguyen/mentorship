"use client";
import React, { useState } from "react";
import Input from "@nextui-org/react";

export default function SearchInput({
  onSearch,
}: any) {
  const [searchQuery, setSearchQuery] =
    useState("");

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="px-2 w-1/3">
      <input
        className="text-black w-full bg-slate-100 rounded-md"
        type="text"
        placeholder="  Enter name to search"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}
