import {
  NextResponse,
  NextRequest,
} from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("Profiles")
    .select();

  return new NextResponse(JSON.stringify(data));
}

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const body = await req.json(); 
  
  const { username, password } = body;

  const { data, error } = await supabase
    .from("Users")
    .select()
    .eq("username", username);

  if (data?.length == 0) {
    let res = new NextResponse(
      JSON.stringify({
        location: "username",
        message: "No user found",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } else {
    if (data![0].password == password) {
      let res = new NextResponse(
        JSON.stringify({
          message: "User Logged In",
          user: {
            UserID: data![0].UserID,
            role: data![0].role,
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res;
    } else {
      let res = new NextResponse(
        JSON.stringify({
          location: "password",
          message: "Incorrect password",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res;
    }
  }

  const response = NextResponse.json(body);

  return response;
}
