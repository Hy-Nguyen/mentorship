import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";
// import SearchInput from "@/components/mentorList/SearchInput";
// import { SearchInput } from "@/components/mentorList/SearchInput.tsx"

export async function POST(request: Request) {
  const supabase = createClient();

  let body = await request.json();

  let list;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("Users")
        .select(
          "name, email, username, UserInterests(interest_name)"
        )
        .eq("role", "mentor")
        .not(
          "UserInterests.interest_name",
          "is",
          null
        )
        .contains("UserInterests.interest_name", [
          `${body}`,
        ]);

    list = menteeList;
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json(list);
}

export async function GET(request: Request) {
  const supabase = createClient();
  let list;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("Users")
        .select("name")
        .eq("role", "mentor");
    return NextResponse.json(menteeList, {
      status: 200,
    });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { error: e.message },
      { status: 404 }
    );
  }
}
