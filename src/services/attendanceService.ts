import { supabase } from "../supabase";

type AttendancePayload = {
  student_id: string,
  date: string,
  status: "present" | "absent" | "late",
  user_id?: string | null
}

//GET
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

export const fetchAttendanceById = async (id: string) => {
  const { data, error } = await supabase
    .from("attendance")
    .select(`
      id,
      student_id,
      date,
      status,
      students:student_id (
        first_name,
        last_name
      )
    `)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}



//CRUD

export const addAttendance = async (payload: {
    student_id: string,
    date: string,
    status: "present" | "absent" | "late";
}) => {
    const { data, error } = await supabase
        .from("attendance")
        .insert([payload])
        .select();

    if (error) throw error;

    return data;
}

export const changeAttendance = async (
  id: string,
  payload: Partial<AttendancePayload>
) => {

  const { error } = await supabase
    .from("attendance")
    .update(payload)
    .eq("id", id);

  if (error) throw error;
}


export const removeAttendance = async (id: string) => {

  const { error } = await supabase
    .from("attendance")
    .delete()
    .eq("id", id);

  if (error) throw error;
}