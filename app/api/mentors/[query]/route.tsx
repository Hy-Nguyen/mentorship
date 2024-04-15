import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";
// import SearchInput from "@/components/mentorList/SearchInput";
// import { SearchInput } from "@/components/mentorList/SearchInput.tsx"

export async function POST(
  request: Request,
  { params }: { params: { query: any } }
) {
  const supabase = createClient();
  let list;
  let body = await request.json();
  console.log(body);

  if (params.query == "undefined") {
    try {
      const { data: menteeList, error } =
        await supabase
          .from("Users")
          .select(
            "name, email, username, UserInterests(interest_name)"
          )
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
          .select(
            "name, email, username, UserInterests(interest_name)"
          )
          .eq("role", "mentor")
          .ilike("name", `%${params.query}%`);

      if (menteeList!.length == 0) {
        try {
          console.log(params.query);

          const { data: menteeList, error } =
            await supabase
              .from("Users")
              .select(
                "name, email, username, UserInterests!inner(interest_name)"
              )
              .eq("role", "mentor")
              .contains(
                "UserInterests.interest_name",
                [`${params.query}`]
              );

          return NextResponse.json(menteeList);
        } catch (e) {
          console.log(e);
        }
      }

      return NextResponse.json(menteeList);
    } catch (e) {
      console.log(e);
    }
  }
}
