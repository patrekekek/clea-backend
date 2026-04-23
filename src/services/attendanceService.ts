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