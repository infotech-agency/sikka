import { BASE_URL } from "@/utils/baseUrl"

export const getAllDirectors = async()=>{
    const response = await fetch(`${BASE_URL}/directors`);
    const data = await response.json();
    return data;
}