import axios from 'axios';
const API_KEY = 'f5c750e62498ce7d84b29e02e1f941bc'
const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

export async function getTrending(page = 1) {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
            params: {
                api_key: `${API_KEY}`,
                page
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function searchByName(query = '', page = 1) {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: `${API_KEY}`,
                query,
                page
            }
        });
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getMovieDetails(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: `${API_KEY}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getCredits(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
            params: {
                api_key: `${API_KEY}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getReviews(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
            params: {
                api_key: `${API_KEY}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getVideo(id) {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/videos`, {
            params: {
                api_key: `${API_KEY}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
}