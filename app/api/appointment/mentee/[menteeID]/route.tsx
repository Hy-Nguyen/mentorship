import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function getList(id: number) {
  const supabase = createClient();
  let appointment;
  try {
    const { data: appointmentList, error } =
      await supabase
        .from("Appointments")
        .select()
        .eq("menteesIDs", `${id}`);

    appointment = appointmentList;
  } catch (e) {
    console.log(e);
  }

  return appointment;
}

export async function GET(
  request: Request,
  { params }: { params: { menteeID: any } }
) {
  const list = await getList(params.menteeID);

  return NextResponse.json(list);
}
