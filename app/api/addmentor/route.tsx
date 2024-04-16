import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

async function addMentor(
  mentorID: any,
  mentorName: any,
  menteeID: any,
  menteeName: any,
  existingList: {
    mentorid: number;
    mentee: [string];
    menteeID: [number];
    mentor_name: string;
  } | null
) {
  let body;
  if (existingList) {
    body = {
      mentorid: mentorID,
      mentor_name: mentorName,
      mentee: [
        ...existingList.mentee,
        menteeName,
      ],
      menteeID: [
        ...existingList.menteeID,
        menteeID,
      ],
    };
  } else {
    body = {
      mentorid: mentorID,
      mentor_name: mentorName,
      mentee: [menteeName],
      menteeID: [menteeID],
    };
  }

  const supabase = createClient();

  try {
    const { data: addMentor, error } =
      await supabase
        .from("mentorship")
        .upsert(body)
        .select();

    console.log(addMentor);

    if (addMentor) {
      return NextResponse.json(addMentor);
    }
  } catch (e) {
    console.log(e);
  }
  return NextResponse.json(body);
}
export async function POST(request: Request) {
  const supabase = createClient();

  let body = await request.json();

  let list;
  try {
    const { data: mentorSearch, error } =
      await supabase
        .from("Users")
        .select("UserID")
        .eq("name", body.mentorName);

    let mentorID = mentorSearch![0].UserID;

    let existingMentorList = null;

    try {
      const { data: mentorCheck, error } =
        await supabase
          .from("mentorship")
          .select()
          .eq("mentorid", mentorID);

      if (mentorCheck!.length != 0) {
        existingMentorList = mentorCheck![0];
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const { data: menteeSearch, error } =
        await supabase
          .from("Users")
          .select("name")
          .eq("UserID", body.mentee);

      let menteeName = menteeSearch![0].name;

      return addMentor(
        mentorID,
        body.mentorName,
        body.mentee,
        menteeName,
        existingMentorList
      );
    } catch (e) {
      console.log(e);
    }

    list = mentorSearch![0];
  } catch (e) {
    console.log(e);
  }
  return NextResponse.json(list);
}
