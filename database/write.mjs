import { createBrowserClient } from "@supabase/ssr";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

const supabase = createClient();
let list;

const fetchAppointments = async () => {
  const { data: appointmentList, error } =
    await supabase.from("Appointments").select();

  if (error) console.log("Error: ", error);
  else list = appointmentList;
};

await fetchAppointments();

list.map((appointment) => {
  console.log(appointment.meetingID);
});
