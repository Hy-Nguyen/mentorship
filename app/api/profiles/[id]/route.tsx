import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function getProfile(id: string) {
  const supabase = createClient();
  let appointment;
  try {
    const { data: appointmentList, error } =
      await supabase
        .from("Profiles")
        .select()
        .eq("id", id);

    if (appointmentList!.length > 0) {
      appointment = appointmentList![0];
    } else {
      appointment = { error: "No Profile Made" };
    }
  } catch (e) {
    console.log(e);
  }

  return appointment;
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const profile = await getProfile(params.id);

  if (profile.error) {
    return NextResponse.json(
      {
        error: profile.error,
      },
      { status: 404 }
    );
  }
  return NextResponse.json(profile);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const profile = await getProfile(params.id);

  return NextResponse.json(profile);
}
