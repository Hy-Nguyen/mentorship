import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

interface Appointment {
  mentorID: number;
  date: string;
  time: string;
  meetingLink: string;
  mentees: string[];
  meetingTitle: string;
  menteesIDs: number[];
}

export async function POST(req: Request) {
  let body = await req.json();

  const supabase = createClient();
  let appointment;
  try {
    const { data, error } = await supabase
      .from("Appointments")
      .insert(body);

    if (error) {
      console.error(
        "Error creating appointment:",
        error
      );
      return new NextResponse(
        JSON.stringify({ error: error.message }),
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
        data,
        message: "Appointment created",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error("Unexpected error:", e);
    return new NextResponse(
      JSON.stringify({
        error: "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
