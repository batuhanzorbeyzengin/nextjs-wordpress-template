import { fetchData } from "@/utils/fetchData";

export async function getPostDetail(slug) {
    return fetchData(`/posts?slug=${slug}`);
}