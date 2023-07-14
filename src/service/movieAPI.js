import axios from 'axios';
const API_KEY = 'f5c750e62498ce7d84b29e02e1f941bc'
const BASE_URL = 'https://api.themoviedb.org/3'

export async function getTrending() {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
            params: {
                api_key: `${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function searchByName(query = '') {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: `${API_KEY}`,
                query
            }
        });
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getMovieDetails(id){ 
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