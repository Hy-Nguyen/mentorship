import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";
// import SearchInput from "@/components/mentorList/SearchInput";
// import { SearchInput } from "@/components/mentorList/SearchInput.tsx"

export async function GET(request: Request) {
  const supabase = createClient();
  let list;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("mentors")
        .select('*')
        .ilike('name', `%${searchQuery}%`);

    list = menteeList;
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json(list);
}
