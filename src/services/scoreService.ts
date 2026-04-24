import { supabase } from "../supabase";

type ScorePayload = {
    student_id: string,
    subject: string,
    type: "summative" | "performance" | "quarterly",
    summative_no: 1 | 2 | 3 | 4 | undefined
    score: number
}

export const createScore = async (payload : ScorePayload) => {

    if (payload.type === "summative" && !payload.summative_no) {
        throw { message: "Summative Number is required"}
    }

    if (payload.type !== "summative") {
        payload.summative_no = undefined
    }

    const { data, error } = await supabase
        .from("scores")
        .insert([payload])
        .select();

    if (error) throw error;

    return data;
}



export const fetchScores = async () => {
    const { data, error } = await supabase
        .from("scores")
        .select(`
            id,
            subject,
            type,
            summative_no,
            score,
            students (
                first_name,
                last_name
             )
        `);
    
    if (error) throw error;

    return data;
}