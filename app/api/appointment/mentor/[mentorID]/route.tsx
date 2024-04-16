import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

async function getList(id: number) {
  const supabase = createClient();
  let appointment;
  try {
    const { data: appointmentList, error } =
      await supabase
        .from("Appointments")
        .select()
        .eq("mentorID", id);

    appointment = appointmentList;
  } catch (e) {
    console.log(e);
  }

  return appointment;
}

export async function GET(
  request: Request,
  { params }: { params: { mentorID: any } }
) {
  const list = await getList(params.mentorID);

  return NextResponse.json(list);
}
