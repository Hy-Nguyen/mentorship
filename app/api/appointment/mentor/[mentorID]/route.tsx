import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function getList(id: string) {
  const supabase = createClient();
  let appointment;
  try {
    const { data: appointmentList, error } =
      await supabase
        .from("Appointments")
        .select(
          "meetingID, date, time, meetingTitle, mentees, meetingLink"
        )
        .eq("mentorID", id);

    appointment = appointmentList;
  } catch (e) {
    console.log(e);
  }

  return appointment;
}

export async function GET(
  request: Request,
  { params }: { params: { mentorID: string } }
) {
  const list = await getList(params.mentorID);

  return NextResponse.json(list);
}
