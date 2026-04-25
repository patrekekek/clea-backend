import { supabase } from "../supabase";

export const createAttendance = async (payload: {
    student_id: string,
    date: string,
    status: "present" | "asbsent" | "late";
}) => {
    const { data, error } = await supabase
        .from("attendance")
        .insert([payload])
        .select();

    if (error) throw error;

    return data;
}


export const fetchAttendance = async () => {
  const { data, error } = await supabase
    .from("attendance")
    .select(`
      id,
      date,
      status,
      students:student_id (
        first_name,
        last_name
      )
    `);

  if (error) throw error;

  return data;
};