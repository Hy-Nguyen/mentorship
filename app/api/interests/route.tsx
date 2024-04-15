import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET(request: Request) {
  const supabase = createClient();
  let list;

  try {
    const { data: interestList, error } =
      await supabase.from("Interests").select();

    return new NextResponse(
      JSON.stringify(interestList)
    );
  } catch (e) {
    console.log(e);
  }
}
