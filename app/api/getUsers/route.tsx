import { NextResponse } from "next/server";
import { getUsers } from "@/database/queries.mjs";

export async function GET() {
  const users = await getUsers();
  return NextResponse.json(users, {
    status: 200,
  });
}
