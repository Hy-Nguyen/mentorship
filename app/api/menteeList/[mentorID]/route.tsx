import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET(
  request: Request,
  { params }: { params: { mentorID: string } }
) {
  const supabase = createClient();
  let list;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("mentorship")
        .select("mentee")
        .eq("mentorid", params.mentorID);

    list = menteeList;
  } catch (e) {
    console.log(e);
  }

  if (list?.length === 0) {
    return NextResponse.json([]);
  }

  return NextResponse.json(list[0].mentee);
}
