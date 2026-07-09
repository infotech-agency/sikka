import { BASE_URL } from "@/utils/baseUrl";

export const getAllTeams = async()=>{
    const data = await fetch(`${BASE_URL}/team`);
    const res = await data.json();
    return res;
}