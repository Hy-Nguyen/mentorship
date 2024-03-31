import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function getList(id: string) {
  const supabase = createClient();
  let mentees;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("mentorship")
        .select("mentee")
        .eq("mentorid", id);

    mentees = menteeList;
  } catch (e) {
    console.log(e);
  }

  return mentees;
}

export async function GET(
  request: Request,
  { params }: { params: { mentorID: string } }
) {
  const list = await getList(params.mentorID);

  return NextResponse.json(list[0].mentee);
}
