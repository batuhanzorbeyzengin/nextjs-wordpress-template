import { fetchData } from "@/utils/fetchData";

export async function getPost() {
    return fetchData('/posts?_embed');
}