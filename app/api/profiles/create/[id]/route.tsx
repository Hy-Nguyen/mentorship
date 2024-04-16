import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const body = await request.json();
  try {
    const { data: user, error } = await supabase
      .from("Profiles")
      .insert([body]);
    return new NextResponse(
      JSON.stringify({
        message: "Profile Created!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
}
