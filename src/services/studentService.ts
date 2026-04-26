import { supabase } from "../supabase";

export interface Student {
  id: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  section: string;
  sex: string;
  status: string;
  created_at: string;
}

// for new student
type NewStudent = Omit<Student, "id" | "created_at">

export const createStudent = async (student: NewStudent) => {
    const { data, error } = await supabase
        .from("students")
        .insert([student])
        .select()
        .single();
    
    if (error) throw error;
    return data;
};

export const getStudents = async () => {
    const { data, error } = await supabase
        .from("students")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data
};

export const getStudentById = async (id: string) => {
    const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", id)
        .single();
    
    if (error) throw error;
    return data;
};

export const updateStudent = async (
    id: string,
    updates: Partial<NewStudent>
) => {
    const { data, error } = await supabase 
        .from("students")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;
    return data;
};

export const deleteStudent = async (id: string) => {
    const { error } = await supabase
        .from("students")
        .delete()
        .eq("id", id);
    
    if (error) throw error;
}
