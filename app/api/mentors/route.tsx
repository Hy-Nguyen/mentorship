import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET(request: Request) {
  const supabase = createClient();
  let list;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("Users")
        .select()
        .eq("role", "mentor");

    list = menteeList;
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json(list);
}
