import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  let list;
  try {
    const { data: menteeList, error } =
      await supabase
        .from("mentorship")
        .select("mentor_name")
        .contains("menteeID", [params.id]);

    list = menteeList;

    if (list?.length === 0) {
      return NextResponse.json([]);
    }

    return NextResponse.json(list);
  } catch (e) {
    console.log(e);
  }
}
