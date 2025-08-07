import axios from 'axios';
import type { Movie } from '../types/movie';


const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

interface FetchMoviesParams {
    query: string;
}

interface TMDBResponse {
    results: Movie[];
}

export const fetchMovies = async ({ query }: FetchMoviesParams): Promise<Movie[]> => {
    const token = import.meta.env.VITE_TMDB_TOKEN;

    const config = {
        params: { query },
        headers: {
        Authorization: `Bearer ${token}`
},
    };

const response = await axios.get<TMDBResponse>(BASE_URL, config);
return response.data.results;
};
/* console.log('Token:', token); */