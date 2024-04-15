import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  let list;
  let userInterestList;
  try {
    const { data: interestList, error } =
      await supabase.from("Interests").select();

    list = interestList;
  } catch (e) {
    console.log(e);
  }

  try {
    const { data: menteeList, error } =
      await supabase
        .from("UserInterests")
        .select()
        .eq("id", params.id);

    if (menteeList.length != 0) {
      userInterestList = menteeList![0].interests;
    }
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({
    fullList: list,
    userInterests: userInterestList,
  });
}
