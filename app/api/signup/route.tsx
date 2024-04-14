import {
  NextResponse,
  NextRequest,
} from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("Users")
    .select();

  return new NextResponse(JSON.stringify(data));
}

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const body = await req.json();

  // Destructure the request body
  const {
    name,
    username,
    email,
    password,
    role,
  } = body;

  try {
    // Insert the data into the "Users" table
    const { data, error } = await supabase
      .from("Users")
      .insert([
        { name, username, email, password, role },
      ]);

    if (error) {
      console.error(
        "Error inserting data:",
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

    // Return a success response
    return new NextResponse(
      JSON.stringify({ data }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
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
