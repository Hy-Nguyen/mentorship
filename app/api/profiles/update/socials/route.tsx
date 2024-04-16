import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function POST(request: Request) {
  const supabase = createClient();
  let body = await request.json();

  try {
    const { data: socials, error } =
      await supabase
        .from("Profiles")
        .upsert({
          id: body.id,
          socials: body.socials,
          email: body.email,
        })
        .eq("id", body.id);
  } catch (e) {
    console.log(e);
    return new NextResponse(
      JSON.stringify({
        message: "Unexpected error!",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new NextResponse(
    JSON.stringify({
      message: "Profile Updated!",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
