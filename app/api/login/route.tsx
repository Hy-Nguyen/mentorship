import {
  NextResponse,
  NextRequest,
} from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const body = await req.json(); // Get the request body as JSON

  const { username, password, role } = body;

  const response = NextResponse.json(body);

  return response;

  // const {username, password, role } = req.body;
  // const { data, error } = await supabase
  // .from('users')
  // .insert([{ username, password }])

  // if (error) {
  //   return res.status(500).json({ error: error.message })
  // }

  // // Return the new user data
  // return res.status(200).json(data[0])
}
