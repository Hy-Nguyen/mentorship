import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";
// import SearchInput from "@/components/mentorList/SearchInput";
// import { SearchInput } from "@/components/mentorList/SearchInput.tsx"

export async function GET(
  request: Request,
  { params }: { params: { query: any } }
) {
  const supabase = createClient();
  let list;
  console.log(params);
  if (params.query == "undefined") {
    try {
      const { data: menteeList, error } =
        await supabase
          .from("Users")
          .select("name, email, username")
          .eq("role", "mentor");

      list = menteeList;
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const { data: menteeList, error } =
        await supabase
          .from("Users")
          .select("name, email, username")
          .eq("role", "mentor")
          .ilike("name", `%${params.query}%`);

      list = menteeList;
    } catch (e) {
      console.log(e);
    }
  }

  return NextResponse.json(list);
}
