import { cache } from 'react'

export const fetchData = cache( async (endpoint) => {
    const url = `${process.env.REST_API_URL}${endpoint}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Fetch failed for ${url}: ${error.message}`);
        throw error;
    }
})