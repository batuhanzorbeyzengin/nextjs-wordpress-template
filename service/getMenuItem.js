import { fetchData } from "@/utils/fetchData";

export function getMenuItem() {
    return fetchData('/menu');
}